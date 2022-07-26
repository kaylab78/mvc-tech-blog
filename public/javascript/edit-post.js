async function editFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('input[name="post-title"]').value.trim();
    // const postBody = document.querySelector('#postBody').value.trim();
    const post_body = document.querySelector('input[name="post-body"]').value.trim();
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length -1
    ];

    console.log(post_body);

    const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            title,
            post_body
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if(response.ok) {
        document.location.replace('/dashboard/');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);