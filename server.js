	
	var express=require('express');
	var Pool=require ('pg').Pool;

	var app=express();
	var config={
			
			user:'manikota',		
			database:'manikota',
			host:'db.imad.hasura-app.io',
			port:'5432',
			password:process.env.DB_PASSWORD
		}
	
	var pool=new Pool(config);
	
	app.get('/testdb',function(req,res)
				{
					
					pool.query("select * from weather ",function(err,result)
																													
					{
					
						if(err)
						
							res.status(500).send(err.toString());
		
						else
									
							res.status(200).send(JSON.stringify(result));
					});
				}
		);
	app.listen(3000);