	
	var express=require('express');
	var Pool=require ('pg').Pool;

	var app=express();
	var config={
			
			user:'manikota',		
			database:'manikota',
			host:'db.imad.hasura.io',
			port:'5432',
			password:process.env.DB_PASSWORD
		}
	
	var pool=new Pool(config);
	
	app.get('/:cityname',function(req,res)
				{
					
					pool.query("select * from weather where city=$1",[req.params.cityname],function(err,result)
																													
					{
					
						if(err)
						
							res.status(500).send("Cannot connect");
		
						else
									
							res.status(200).send(result.rows);
					});
				}
		);
	app.listen(3000);