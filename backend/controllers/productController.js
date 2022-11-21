exports.getProduct = (req,res,next) => {
    res.status(200).json({
        success:true,
        messagge: "En esta ruta se podran ver los productos"
    })
}