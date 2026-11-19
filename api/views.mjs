// visitor counter backed by Upstash Redis (env vars come from the Vercel Marketplace integration)
// ponytail: anyone can POST to bump the count; add a rate limit if someone ever bothers
const url = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
const token = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;

const redis = async cmd => {
  const r = await fetch(`${url}/${cmd}`, { headers: { Authorization: `Bearer ${token}` } });
  if (!r.ok) throw new Error(`redis ${r.status}`);
  return Number((await r.json()).result) || 0;
};
const reply = views => Response.json({ views }, { headers: { 'cache-control': 'no-store' } });

export const GET = async () => reply(await redis('get/views'));
export const POST = async () => reply(await redis('incr/views'));
