  let state = {

    profilePage: {    
      posts: [
      {id:1,message:'Hi, how are you?',likecount:7},
      {id:2,message:"It's my first post!",likecount:3} 
    ]},
    messagePage : {
      message: [
        {Id:1,messageText:'Sam Jepa,pidor!'},
        {Id:2,messageText:'Karamislo'},
        {Id:3,messageText:'FUNTIK!!!'}
      ],
      dialogs : [
        {userId:1,userName:'Bassist',ava:'https://f1.upet.com/A_r2u6uZhnxA_x.jpg'},
        {userId:2,userName:'Jepa',ava:'https://kartinki-dlya-srisovki.ru/wp-content/uploads/2018/10/klevye-kartinki-dlya-srisovki-2.png'},
        {userId:3,userName:'KotoJop',ava:'https://i.pinimg.com/236x/5b/e1/75/5be17525ba53cfd0a55f0d1c994ab180.jpg'},        
      ]}
    
  }
  export let addPost = (postMessage) => {
    let newPost ={
      id:5,
      message: postMessage,
      likecount: 0
    };
    state.profilePage.posts.push(newPost)
  }
export default state;