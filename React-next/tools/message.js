import { notification } from 'antd'

export default function message (type, message, content) {
    notification[type]({
        message: message,
        description: content
    })
}