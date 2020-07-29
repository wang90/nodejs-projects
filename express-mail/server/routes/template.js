const express = require('express')

const Template = require('../model/template');
const router = express.Router()


router.get('/template',async (req,res) => {
    const temps = await Template.find({}).sort({update_at:-1});
    res.$success(temps)
})

router.get('/template/:id', async (req,res) => {
    const temp = await Template.findById({_id:req.params.id})
    if (temp) {
        res.$success(temp)
    }else{
        res.$success({})
    }  
})

router.post('/template',async (req,res) => {
    console.log('crate')
    try {
        const temp = await Template.create(req.body)
        console.log(temp)
        res.$success(temp)
    }catch (e){
        res.$error(e)
    }
})

router.put('/template/:id', async (req,res) => {
    const temp = await Template.findByIdAndUpdate(
        {_id:req.params.id},
        req.body,
        {new:true});
    if (temp) {
        res.$success(temp)
    }else{
        res.$error('更新失败',400)
    }  
})

router.delete('/template/:id', async (req,res) => {
    const temp = await Template.deleteOne(
        {_id:req.params.id});
    if (temp) {
        res.$success(temp)
    }else{
        res.$error('删除失败',400)
    }  
})


module.exports = router;