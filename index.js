const Quotecontainer = document.querySelector(".quote-container")
const Author = document.getElementById("author")

const quote = document.getElementById("quote")

const twitterbutton = document.getElementById("twitter")

const newquote = document.getElementById("new-quote")




let apiQuotes = []

function newQuote() {
    const Quotes = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]
    quote.textContent = Quotes.text
    Author.textContent = Quotes.author.slice(0, -10)
   

}

function twiterQuote() {
    const twitterurl = `https://twitter.com/intent/tweet?text=${quote.textContent} - ${Author.textContent}`
    window.open(twitterurl, '_blank')
}


newquote.addEventListener('click', newQuote)

twitterbutton.addEventListener('click',twiterQuote)

async function getQuotes() {
    const apiUrl = 'https://type.fit/api/quotes'
    try {
        const response = await fetch(apiUrl)
        apiQuotes = await response.json()
        console.log(apiQuotes);
        newQuote()


        // console.log(apiQuotes);
    }
    catch (error) {
        console.error(error)

    }

}

getQuotes()