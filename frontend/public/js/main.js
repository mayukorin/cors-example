const other_origin_get_request_button_id = 'other_origin_get_request_button';
const other_origin_get_request_url = 'http://localhost:1991/cors/hello';
const other_origin_get_request_message_id = 'other_origin_get_request_message';

const otherOriginGetRequestButton = document.getElementById(other_origin_get_request_button_id);
otherOriginGetRequestButton.addEventListener('click', async function(_) {
    const res = await fetch(other_origin_get_request_url);
    if (res.status === 200) {
        const message = await res.json();
        showMessage(other_origin_get_request_message_id, message['message']);
    } else {
        showMessage(other_origin_get_request_message_id, 'GETリクエストが失敗しました．詳細は，Chrome DevTools の Console パネルを見てください．');
    }
})

function showMessage(elementId, message) {
    const element = document.getElementById(elementId);
    element.innerHTML = message;
}