
async function main() {
    try {


        const sqlite = require('better-sqlite3')
        const db = sqlite('res/db/papeDb.db')
        db.pragma('journal_mode = WAL');


        const allsetupsql = []

        allsetupsql.push(`
        drop table if exists Images;
    `);
        allsetupsql.push(`
        drop table if exists Users;
    `);
        allsetupsql.push(`
        drop trigger if exists delete_oldest_images;
    `);



        allsetupsql.push(`

-- image table
  CREATE TABLE "Images" (
	"id"	INTEGER NOT NULL UNIQUE,
	"imageData"	BLOB NOT NULL,
    "uploadNickname" TEXT,
	"userId"	INTEGER NOT NULL,
	"dateTime" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY("id" AUTOINCREMENT),
	FOREIGN KEY("userId") REFERENCES "Users"("id")
);`);

        allsetupsql.push(`
-- basic fingerprint table (because anonymous image uploading can be sus)
CREATE TABLE "Users" (
        "id"    INTEGER NOT NULL UNIQUE,
        "userAgent"     TEXT,
        "ip"    TEXT,
        PRIMARY KEY("id" AUTOINCREMENT)
    );
`);

        allsetupsql.push(`
  
-- this just makes the Images table akin to a queue array (max size 10)
  -- (old rows get deleted automatically by SQL trigger)

CREATE TRIGGER delete_oldest_images
after INSERT ON Images
BEGIN

      DELETE FROM Images
        WHERE id IN (
            SELECT id
            FROM Images
            ORDER BY dateTime asc
            LIMIT 1
        );
        
END;`)



        allsetupsql.forEach(sql => {
            console.log("\nrunning sql query:\n " + sql)
            const result = db.prepare(sql).run();
            console.log(result)
        });

        console.log("\n\n\n----------\n\nsql finished:\n")
        //console.log("\nimages:")
        //console.log(db.prepare("select * from Images;").all());
        //console.log("\nusers:")
        //console.log(db.prepare("select * from Users;").all());
        console.log("\ndatabase reset!\n")


        db.close();


    } catch (error) {

        console.error(error.message)
    }
}


function warning() {
    console.log("Warning! Data destruction.")

    return true; // TRUE to enable destruction!!! :)
}

if (warning())
    main()



