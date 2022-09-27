import Article from "./Article"

function ArticleList({ posts }){
 return(
    <main>
        {posts.map((post)=>{
        let post = { id, title, date, preview, minutes }
        return(
            <Article 
                     title={title} 
                     key={id} 
                     date ={date} 
                     preview={preview} 
                     minutes={minutes} 
                     />
        ) })}
    </main>
 )
}
export default ArticleList