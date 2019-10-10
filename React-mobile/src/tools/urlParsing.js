/**
 * @name parsing url 编译
 */

export default function UrlParsing(url, key) {
  const urlParams = url.substring(1);
  if (urlParams) {
    let content;
    urlParams.split('&').forEach(item => {
      let data = item.split('=');
      if (data[0] === key) {
        content = data[1];
      }
    });
    return content;
  }
}
