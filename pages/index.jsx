import React, { useEffect, useState } from "react";
import Link from "next/link";





const App = () =>{
    const [username, setUsername] = useState("");
    return(
        <div>
            <label>
                username
                <input value={username} onChange={(e)=>setUsername(e.target.value)} />
            </label>
            <p>{username} 깃허브 검색하기</p>
            <Link href={`/users/${username}`}>
                <a>검색하기</a>
            </Link>
        </div>
    );
};



//NOTE:간단한 api 호출을 통한 SSR 실습1
// const index = ({user}) =>{
//     const username =user && user.name;
//     return <div>{username}</div>
// }

// export const getServerSideProps = async () => {
//     try {
//         const res = await fetch("https://api.github.com/users/jerrynim");
//         if(res.status===200){
//             const user = await res.json();
//             return { props: { user }};
//         }
//         return {props:{}};
//     } catch (error) {
//         console.log(e);
//         return {props:{}};
//     }
// }


// const App = () => {
//     const [name,setName] =useState("");
//     const router =useRouter();

    
    
    
//     return (

        

        
        //NOTE: 정적 리소스 파일 불러오기
        // <div>
        //     <button type="button" onClick={()=>router.push('/tomato')}>tomato바로가기</button>

        // <p>이름</p>
        // <input  
        // value={name}
        // onChange={(e)=> setName(e.target.value)}
        // style={{ marginRight:"12px"}}
        
        // />
        // <button type="button" onClick={()=> router.push(`/vegetable/${name}`)}>
        //     {name}으로 바로가기
        // </button>

        // <img src="/wallpaper.jpg" alt="" />
        // </div>

        //NOTE: 정적 동적 라우팅 연습
        // <div>
        //     <h2>Link to 'potato' Page</h2>
        //     <Link href ="/vegetable/potato">
        //         <a>Move to '/vegetable/potato'</a>
        //     </Link>
    

        // </div>
//     );
// };



//export default index;
export default App;
