import friends from "./Images/Friends.jpg";
import bbt from "./Images/Bbt.jpg";
import mh from "./Images/Mh.jpg";
import sg from "./Images/Sg.jpg";
import sh from "./Images/Sh.jpg";

const ImageData = [friends, bbt, mh, sg, sh];

const Data = [
    {
        id: 1,
        showTitle: "A Netflix Series",
        showName: "Friends",
        showDescription: "This hit sitcom follows the merry misadventures of six 20-something pals as they navigate the pitfalls of work, life and love in 1990s Manhattan.",
        showPoster: ImageData[0],
        showLink: "https://www.netflix.com/in/title/70153404",
        showRating: "8.9/10",
        showRatingLink: "https://www.imdb.com/title/tt0108778/"

    },
    {
        id: 2,
        showTitle: "A Netflix Series",
        showName: "Big Bang Theory",
        showDescription: "Physicists Leonard and Sheldon find their nerd-centric social circle with pals Howard and Raj expanding when aspiring actress Penny moves in next door.",
        showPoster: ImageData[1],
        showLink: "https://www.netflix.com/in/title/70143830",
        showRating: "8.1/10",
        showRatingLink: "https://www.imdb.com/title/tt0898266/"

    },
    {
        id: 3,
        showTitle: "A Netflix Original Series",
        showName: "Money Heist",
        showDescription: "Eight thieves take hostages and lock themselves in the Royal Mint of Spain as a criminal mastermind manipulates the police to carry out his plan.",
        showPoster: ImageData[2],
        showLink: "https://www.netflix.com/in/title/80192098",
        showRating: "8.3/10",
        showRatingLink: "https://www.imdb.com/title/tt6468322/"

    },
    {
        id: 4,
        showTitle: "A Netflix Original Series",
        showName: "Sacred Games",
        showDescription: "A link in their pasts leads an honest cop to a fugitive gang boss, whose cryptic warning spurs the officer on a quest to save Mumbai from cataclysm.",
        showPoster: ImageData[3],
        showLink: "https://www.netflix.com/in/title/80115328",
        showRating: "8.6/10",
        showRatingLink: "https://www.imdb.com/title/tt6077448/"

    },
    {
        id: 5,
        showTitle: "A Netflix Series",
        showName: "Sherlock Holmes",
        showDescription: "In this updated take on Sir Arthur Conan Doyle's beloved mystery tales, the eccentric sleuth prowls the streets of modern London in search of clues.",
        showPoster: ImageData[4],
        showLink: "https://www.netflix.com/in/title/70202589",
        showRating: "9.1/10",
        showRatingLink: "https://www.imdb.com/title/tt1475582/"

    }
]

export default Data;