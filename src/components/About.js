
import { useState, useEffect } from "react"

const About = () => {

    let [post, setPost] = useState([{"id": "1", "title": "First text"}]);

    useEffect(() => {
        let mounted = true;
        async function fetchData() {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const parsedData = await response.json();
            
            if (mounted) {
                setPost(parsedData)
            }
        }
        fetchData();

        return () => {
            mounted = false;
        };
    },[])

  return (
    <div>
      <h1>Iso teksti</h1>
        <ul>
        {post.map((item) => (
            <li key={item.id}>{item.title}</li>
        ))}
        </ul>

    </div>
  )
}

export default About
