/* Uses CLAUDE CODE (very hard) */

export const h1 =
  "[&_h1]:text-4xl [&_h1]:font-bold [&_h1]:tracking-tight [&_h1]:text-zinc-900 dark:[&_h1]:text-white [&_h1]:mb-4 [&_h1]:mt-0";
export const h2 =
  "[&_h2]:text-3xl [&_h2]:font-semibold [&_h2]:text-zinc-800 dark:[&_h2]:text-zinc-100 [&_h2]:mt-10 [&_h2]:mb-3 [&_h2]:border-b [&_h2]:border-zinc-300 dark:[&_h2]:border-zinc-700 [&_h2]:pb-2";
export const h3 =
  "[&_h3]:text-2xl [&_h3]:font-semibold [&_h3]:text-zinc-800 dark:[&_h3]:text-zinc-100 [&_h3]:mt-8 [&_h3]:mb-2";
export const h4 =
  "[&_h4]:text-xl [&_h4]:font-medium [&_h4]:text-zinc-700 dark:[&_h4]:text-zinc-200 [&_h4]:mt-6 [&_h4]:mb-2";
export const h5 =
  "[&_h5]:text-lg [&_h5]:font-medium [&_h5]:text-zinc-600 dark:[&_h5]:text-zinc-300 [&_h5]:mt-4 [&_h5]:mb-1";
export const h6 =
  "[&_h6]:text-base [&_h6]:font-medium [&_h6]:text-zinc-500 dark:[&_h6]:text-zinc-400 [&_h6]:mt-4 [&_h6]:mb-1";

export const p =
  "[&_p]:text-base [&_p]:leading-7 [&_p]:text-zinc-700 dark:[&_p]:text-zinc-300 [&_p]:mb-4";

export const a =
  "[&_a]:text-sky-600 dark:[&_a]:text-sky-400 [&_a]:underline [&_a]:underline-offset-2 [&_a]:decoration-sky-400 dark:[&_a]:decoration-sky-600 [&_a:hover]:text-sky-500 dark:[&_a:hover]:text-sky-300 [&_a:hover]:decoration-sky-500 dark:[&_a:hover]:decoration-sky-400";

export const strong =
  "[&_strong]:font-bold [&_strong]:text-zinc-900 dark:[&_strong]:text-white";
export const em =
  "[&_em]:italic [&_em]:text-zinc-700 dark:[&_em]:text-zinc-300";
export const del =
  "[&_del]:line-through [&_del]:text-zinc-400 dark:[&_del]:text-zinc-500";

export const ul =
  "[&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_ul]:space-y-1 [&_ul]:text-zinc-700 dark:[&_ul]:text-zinc-300";
export const ol =
  "[&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-4 [&_ol]:space-y-1 [&_ol]:text-zinc-700 dark:[&_ol]:text-zinc-300";
export const li = "[&_li]:leading-7 [&_li>ul]:mt-1 [&_li>ol]:mt-1";

export const blockquote =
  "[&_blockquote]:border-l-4 [&_blockquote]:border-zinc-300 dark:[&_blockquote]:border-zinc-600 [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-zinc-600 dark:[&_blockquote]:text-zinc-400 [&_blockquote]:my-6 [&_blockquote]:bg-zinc-100/70 dark:[&_blockquote]:bg-zinc-800/50 [&_blockquote]:py-0.5 [&_blockquote]:rounded-r";

export const code =
  "[&_code]:bg-zinc-200 dark:[&_code]:bg-zinc-800 [&_code]:text-pink-700 dark:[&_code]:text-pink-400 [&_code]:text-sm [&_code]:font-mono [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded";
export const pre =
  "[&_pre]:bg-zinc-100 dark:[&_pre]:bg-zinc-900 [&_pre]:border [&_pre]:border-zinc-300 dark:[&_pre]:border-zinc-700 [&_pre]:text-zinc-900 dark:[&_pre]:text-zinc-100 [&_pre]:rounded-lg [&_pre]:p-4 [&_pre]:overflow-x-auto [&_pre]:my-6 [&_pre]:text-sm [&_pre]:leading-6";
export const preCode =
  "[&_pre_code]:bg-transparent [&_pre_code]:text-inherit [&_pre_code]:p-0 [&_pre_code]:rounded-none";

export const hr =
  "[&_hr]:border-t [&_hr]:border-zinc-300 dark:[&_hr]:border-zinc-700 [&_hr]:my-8";

export const table =
  "[&_table]:w-full [&_table]:text-sm [&_table]:border-collapse [&_table]:my-6";
export const thead = "[&_thead]:bg-zinc-100 dark:[&_thead]:bg-zinc-800";
export const th =
  "[&_th]:text-left [&_th]:font-semibold [&_th]:text-zinc-800 dark:[&_th]:text-zinc-200 [&_th]:px-4 [&_th]:py-2 [&_th]:border [&_th]:border-zinc-300 dark:[&_th]:border-zinc-700";
export const td =
  "[&_td]:px-4 [&_td]:py-2 [&_td]:border [&_td]:border-zinc-300 dark:[&_td]:border-zinc-700 [&_td]:text-zinc-700 dark:[&_td]:text-zinc-300";
export const trEven =
  "[&_tr:nth-child(even)]:bg-zinc-100/60 dark:[&_tr:nth-child(even)]:bg-zinc-800/40";

export const img =
  "[&_img]:rounded-lg [&_img]:max-w-full [&_img]:h-auto [&_img]:my-6 [&_img]:shadow-md";

export const details =
  "[&_details]:border [&_details]:border-zinc-300 dark:[&_details]:border-zinc-700 [&_details]:rounded [&_details]:px-4 [&_details]:py-2 [&_details]:my-4 [&_details]:bg-zinc-100/50 dark:[&_details]:bg-zinc-800/30";
export const summary =
  "[&_summary]:cursor-pointer [&_summary]:font-medium [&_summary]:text-zinc-800 dark:[&_summary]:text-zinc-200 [&_summary]:select-none";

export const kbd =
  "[&_kbd]:bg-zinc-200 dark:[&_kbd]:bg-zinc-800 [&_kbd]:border [&_kbd]:border-zinc-400 dark:[&_kbd]:border-zinc-600 [&_kbd]:rounded [&_kbd]:px-1.5 [&_kbd]:py-0.5 [&_kbd]:text-xs [&_kbd]:font-mono [&_kbd]:text-zinc-700 dark:[&_kbd]:text-zinc-300 [&_kbd]:shadow-sm";
export const mark =
  "[&_mark]:bg-yellow-300/40 dark:[&_mark]:bg-yellow-400/20 [&_mark]:text-yellow-900 dark:[&_mark]:text-yellow-200 [&_mark]:px-0.5 [&_mark]:rounded-sm";
export const sub =
  "[&_sub]:text-xs [&_sub]:align-sub [&_sub]:text-zinc-500 dark:[&_sub]:text-zinc-400";
export const sup =
  "[&_sup]:text-xs [&_sup]:align-super [&_sup]:text-zinc-500 dark:[&_sup]:text-zinc-400";
export const abbr =
  "[&_abbr]:underline [&_abbr]:decoration-dotted [&_abbr]:cursor-help [&_abbr]:text-zinc-700 dark:[&_abbr]:text-zinc-300";

export const prose = [
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  a,
  strong,
  em,
  del,
  ul,
  ol,
  li,
  blockquote,
  code,
  pre,
  preCode,
  hr,
  table,
  thead,
  th,
  td,
  trEven,
  img,
  details,
  summary,
  kbd,
  mark,
  sub,
  sup,
  abbr,
].join(" ");
