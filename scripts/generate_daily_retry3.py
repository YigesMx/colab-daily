import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
ASSEMBLY = Path('/home/yiges/apps/colab-daily/crawl_tmp/refine_candidates/runs/refine-2026-08-13-retry4/assemblies/assembly-2026-08-13-retry4')
DATE = '2026-08-13'
OUT = ROOT / 'docs' / 'daily' / DATE
PUBLIC = ROOT / 'docs' / 'public' / 'daily' / DATE


def slug(value):
    value = re.sub(r'[^a-zA-Z0-9\u4e00-\u9fff]+', '-', value.lower()).strip('-')
    return value[:78].rstrip('-') or 'candidate'


def main():
    publication = json.loads((ASSEMBLY / 'publication_set.json').read_text(encoding='utf-8'))
    groups = publication['groups']
    if set(groups) != {'Paper', 'News', 'Policy'}:
        raise SystemExit('invalid grouped publication set')
    for category, group in groups.items():
        target = OUT / category.lower()
        target.mkdir(parents=True, exist_ok=True)
        for stale in target.glob("*.md"):
            stale.unlink()
        for candidate in group['candidates']:
            source = ASSEMBLY / candidate['article_path']
            text = source.read_text(encoding='utf-8')
            front = text.replace('---\n', '---\nschemaVersion: 2\n', 1)
            front = front.replace('date: "2026-08-13"', 'date: "2026-08-13"', 1)
            front = front.replace("group_rank:", "groupRank:").replace("group_score:", "groupScore:").replace("score_scale:", "scoreScale:").replace("rating_track:", "ratingTrack:")
            keyword_lines = "keywords:\n" + "".join(f"  - {json.dumps(keyword, ensure_ascii=False)}\n" for keyword in candidate["keywords"])
            front = re.sub(r"(?m)^keywords:\n(?:  - .*\n)+", keyword_lines, front, count=1)
            front = front.replace('previewImage: "assets/preview.png"',
                                  f'previewImage: "/daily/{DATE}/assets/{candidate["candidate_id"]}/preview.png"', 1)
            path = target / f"{candidate['group_rank']:02d}-{slug(candidate['title'])}.md"
            path.write_text(front, encoding='utf-8')
    for candidate in groups['Paper']['candidates']:
        source = ASSEMBLY / candidate['preview_image']
        dest = PUBLIC / 'assets' / candidate['candidate_id'] / 'preview.png'
        dest.parent.mkdir(parents=True, exist_ok=True)
        dest.write_bytes(source.read_bytes())
    manifest = {
        'schema_version': 2, 'cycle_id': publication['cycle_id'], 'display_date': DATE, 'selection_limit': 15,
        'groups': {category: {'candidates': [{
            'candidate_id': c['candidate_id'], 'category': category, 'group_rank': c['group_rank'],
            'group_score': c['group_score'], 'score_scale': c['score_scale'], 'rating_track': c['rating_track'],
            'path': f'docs/daily/{DATE}/{category.lower()}/{c["group_rank"]:02d}-{slug(c["title"])}.md',
            'bytes': (OUT / category.lower() / f'{c["group_rank"]:02d}-{slug(c["title"])}.md').stat().st_size,
            'preview_image': (f'/daily/{DATE}/assets/{c["candidate_id"]}/preview.png' if category == 'Paper' else None)
        } for c in group['candidates']]} for category, group in groups.items()},
        'assets': [{'candidate_id': c['candidate_id'], 'path': f'docs/public/daily/{DATE}/assets/{c["candidate_id"]}/preview.png',
                    'bytes': (PUBLIC / 'assets' / c['candidate_id'] / 'preview.png').stat().st_size}
                   for c in groups['Paper']['candidates']],
        'detached_legacy_pages': [], 'generated_at': '2026-08-13T06:00:00Z',
        'quota_proof': {'selection_limit': 15, 'paper_count': len(groups['Paper']['candidates']), 'news_count': len(groups['News']['candidates']), 'policy_count': len(groups['Policy']['candidates']), 'selected_total': sum(len(g['candidates']) for g in groups.values()), 'news_policy_total': len(groups['News']['candidates']) + len(groups['Policy']['candidates']), 'paper_capacity': 10},
        'compatibility_checks': {'detached_legacy_page_count': 0, 'detached_legacy_asset_count': 0}
    }
    (OUT / '.managed-manifest.json').write_text(json.dumps(manifest, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')


if __name__ == '__main__':
    main()
