const students=[
    {name:"ali",id:1}]

    const getStudents=(req,res)=>{
        res.send(students)
    }
    module.exports={
        getStudents
    }