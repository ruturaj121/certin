 const axios = require('axios');
const request = require('request-promise')
const cheerio = require('cheerio');

const https = require('https')

const httpsAgent = new https.Agent({
    rejectUnauthorized: false,
  });


const getPostTitles = async () => {
	try {
		const {data } = await axios.get(
			'https://cert-in.org.in/', { httpsAgent }
		);

		const $ = cheerio.load(data);
		const postTitles = [];
	// const le = 	$(".BContent").find("img").each(function(i, img){
	// 		if(i == 10) return;
	// 		console.log($(img).text() , $(img).attr('new'), true);
			
	// 	});


const le = 	$('tr:nth-child(2) > td > span:nth-child(6) > ul > li').textContent//.each((_idx, el) => {
			// const post = le //$(el).text()
		 	 postTitles.push(le)
	//	});

		console.log(le);
	} catch (error) {
		throw error;
	}
};

getPostTitles()


// request("https://www.cert-in.org.in/", (error, response, html) => {
//     if(!error && response.statusCode==200) {
//         const $= cheerio.load(html);

//         $("#print_content > table > tbody > tr > td > table > tbody > tr:nth-child(4) > td > table > tbody > tr > td:nth-child(2) > table > tbody > tr:nth-child(1) > td > table > tbody > tr:nth-child(6) > td > table > tbody > tr > td:nth-child(1) > table > tbody > tr:nth-child(3) > td.Content > span.BContent > a").each((i, data) => {
//             const item= $(data).text();

//             console.log(item);
//         })
//     }

// });
