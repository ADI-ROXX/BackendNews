

export const searchNews=async(req,res)=>{
    const search=req.body.search;;
    console.log("here");
    try {    
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=d114f7f8a8bd42fc9b85336ee25c7463&page=${1}&pageSize=20`;
        if(search!=''){
            url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=d114f7f8a8bd42fc9b85336ee25c7463&q=${search}&sortBy=popularity&page=${1}&pageSize=20`;

        }
        console.log("hereeddd");
        let data = await fetch(url);
        let parsed_data = await data.json();
        res.status(200).json({data:parsed_data});


    } catch(e){
        res.status(405).json({msg:"Some error occured"})
    }

    





}

