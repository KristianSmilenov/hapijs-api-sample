##Sample hapi.js REST API

A sample structure for building a REST API on top of `hapi.js` framework that consumes a `MySQL` database. Original sample is located here [agendor sample](https://github.com/agendor/sample-hapi-rest-api)

---
Start by cloning this repo and going inside the project's folder:

```shell
$ git clone https://github.com/KristianSmilenov/hapijs-api-sample.git
$ cd hapijs-api-sample
```

To begin with, we have to define some environment variables (with an Ubuntu 12.04 you can edit the `~/.bashrc` file):

```shell
export NODE_ENV=development
export NODE_HOST=localhost
export NODE_PORT=81
export DB_DEV_USER=root
export DB_DEV_PASS=
```

**PS**: Don't forget to alter `DB_DEV_USER` AND `DB_DEV_PASS` values properly to access your MySQL Database.

Please import the 'net' database from the other samples.

After that give permissions and run the **database.sh** script. It's going to create `user` table and insert a default user, which credentials are:

* Email: user1@customer1.com
* Pass: 123

So run it:

```shell
$ chmod +x database.sh
$ bash database.sh
```

So it's time to install project dependencies, run the following command:

```shell
$ npm install
```

Now you can check the recently created database in you MySQL. Start the server by running `grunt` in the terminal:

```shell
$ grunt
```

All the unit tests will run and everything should be green.

That's it! You should be able to play around your API GETting, POSTing, PUTing AND DELETEing Tasks. The end-points are as described in the `src/routes/` folder:

* **GET** http://localhost:81/v1/devices
* **GET** http://localhost:81/v1/devices/{id}
* **GET**    http://localhost:81/v1/alerts
* **POST**   http://localhost:81/v1/alerts
* **PUT** 	 http://localhost:81/v1/alerts/{id}
* **DELETE** http://localhost:81/v1/alerts/{id}

##TODO

Swagger integration
Typescript version

##Further reading

If you want a deeper analysis of the project, checkout [this Gist](https://gist.github.com/agendor/9922151).
