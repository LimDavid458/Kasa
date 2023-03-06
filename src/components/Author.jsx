export default function Author({name, picture}) {
    const authorName = /[ ]/g;
    const author = name.split(authorName);

    return (
        <div className="author">
            <h2>{author[0]} <span>{author[1]}</span></h2>
            <img src={picture} alt="Profile de l'auteur." />
        </div>
    )
}