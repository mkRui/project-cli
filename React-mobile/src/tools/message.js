import { notification, message } from 'antd';

export default function messageTip(type, title, content) {
  var sUserAgent = navigator.userAgent.toLowerCase();
  if (
    /ipad|iphone|midp|rv:1.2.3.4|ucweb|android|windows ce|windows mobile/.test(
      sUserAgent
    )
  ) {
    message[type](title);
  } else {
    notification[type]({
      message: title,
      description: content
    });
  }
}
