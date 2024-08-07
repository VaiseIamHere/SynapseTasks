const book = require('./bookSchema.js')

// Error Function
const errorDetected = async (res, err) =>{
    console.log(err.message)
    res.status(500).json({"Error": err.message})
}

// Handler Functions
const general = (req, res) => {
    res.send("Heyy server is Listening !!<br>Test API's for Blog")
}

const create = async (req, res) => {
    try{
        existing = await book.find({"name": req.body.name})
        if(existing.length == 0){
            temp = await book.create(req.body)
            res.status(200).json(temp)
        }
        else{
            res.status(200).send("Book with same name already exists !!")
        }
    }
    catch(err){
        errorDetected(res, err)
    }
}

const view = async (req, res) => {
    try{
        Bookname = req.params.name
        temp = await book.find({"name": Bookname})
        if(temp.length == 0){
            res.status(200).json({0: `Cannot Find any book with name '${blogname}'...`})
        }
        else{
            res.status(200).json(temp)
        }
    }
    catch(err){
        errorDetected(res, err)
    }
}

const viewAll = async (req, res) => {
    try{
        temp = await book.find({})
        res.status(200).json(temp)
    }
    catch(err){
        errorDetected(res, err)
    }
}

const updateBook = async (req, res) => {
    try{
        Bookname = req.params.name
        check = !req.body.hasOwnProperty("name")
        if(check){
            temp = await book.findOneAndUpdate({"name": Bookname}, req.body, {new: true})
            if(temp == null){
                return res.send("Such Book do not exists !!")
            }
            res.status(200).json(temp)
        }
        else{
            res.send("Cannot Update Book name !!!")
        }
    }
    catch(err){
        errorDetected(res, err)
    }
}

const deleteBook = async (req, res) => {
    try{
        Bookname = req.params.name
        check = await book.deleteMany({"name": Bookname})
        if(check.deletedCount > 0){
            res.send("Book deleted sucessfully !!")
        }
        else{
            res.send("Book do not exits or Deleted Earlier !!")
        }
    }
    catch(err){
        errorDetected(res, err)
    }
}

const deleteAll = async (req, res) => {
    try{
        await book.deleteMany({})
        res.status(200).send("All the books posts deleted !!")
    }
    catch(err){
        errorDetected(res, err)
    }
}

const viewWithAuthor = async (req, res) => {
    try{
        Authorname = req.params.name
        temp = await book.find({"author": Authorname})
        if(temp.length == 0){
            res.status(200).json({0: `Cannot Find any book with Author name '${Authorname}'...`})
        }
        else{
            res.status(200).json(temp)
        }
    }
    catch(err){
        errorDetected(res, err)
    }
}

const viewWithGenre = async (req, res) => {
    try{
        Genrename = req.params.name
        temp = await book.find({"genre": Genrename})
        if(temp.length == 0){
            res.status(200).json({0: `Cannot Find any book with Genre name '${Genrename}'...`})
        }
        else{
            res.status(200).json(temp)
        }
    }
    catch(err){
        errorDetected(res, err)
    }
}

module.exports = {
    general,
    create,
    view,
    viewAll,
    updateBook,
    deleteBook,
    deleteAll,
    viewWithAuthor,
    viewWithGenre
}