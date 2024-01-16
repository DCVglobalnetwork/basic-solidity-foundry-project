const API_KEY = // Very important !!!!! // here place your API_KEY'// // do not deploy this API key or upload onto GitHub 
const submitButton = document.querySelector('#submit')
const outPutElement = document.querySelector('#output')

async function getMessage() {
    console.log('clicked')
    const options = {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${API_KEY}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{
                "role": "system",
                "content": "You are a helpful assistant."
            },
            {
                "role": "user",
                "content": "Hello!"
            }
            ]
        })
    }
    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', options)
        const data = await response.json()
        console.log(data)
        outPutElement.textContent = data.choices[0].messages.content
    } catch (error) {
        console.error(error)

    }
}

submitButton.addEventListener('click', getMessage)