# **Pape**
###### <sup>(repo formerly DoodleDrop)</sup>
Let people anonymously set my phone's wallpaper *(this can't go wrong!)*.

---

Current Android app release:
- https://paste.c-net.org/ConeySpite
- ~~https://drive.google.com/file/d/1Ad1omRriF8Db-R4HHYwXaQrmgxpCdGmW/view?usp=sharing~~

## Code: 
#### SQL:

 <sup>[in repo](https://github.com/cheeseonamonkey/Pape/blob/main/runnables/bootstrapDB.js)</sup>


|Table   | Field | Type | PK | FK | AI | UQ | Desc |
|--------|-------------|-----------|-------------|------------------|------------------|---------------------|-------------|
|Users   | id          | INTEGER   | ✓           | ✓                |                  | ✓  | Primary key for the Users table. (PK: Primary Key) |
|        | userAgent  | TEXT      |             |                  |                  |     | User agent string representing the client's browser. |
|        | ip          | TEXT      |             |                  |                  |     | IP address of the client's device. |
|Images  | id          | INTEGER   | ✓           | ✓                |                  | ✓  | Primary key for the Images table. (PK: Primary Key) |
|        | imageData   | BLOB      |             |                  |                  |     | Binary data representing the image content. |
|        | uploadNickname | TEXT  |             |                  |                  |     | Nickname given to the uploaded image. |
|        | userId      | INTEGER   |             |                  | ✓  |     | Foreign key referencing the id field in the Users table. (FK: Foreign Key) |
|        | dateTime    | TEXT      |             |                  |                  |     | Date and time when the image was uploaded. |


#### Server & Client:
<sup>[repo](https://github.com/cheeseonamonkey/Pape/blob/main/server.js)</sup>
