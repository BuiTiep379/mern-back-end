const Page = require('../../models/page.js');

exports.createPage = (req, res) => {
    const { banners, products } = req.files;

    if (banners.length > 0) {
        req.body.banners = banners.map((banner, index) => ({
            img: `${process.env.API}/public/${banner.filename}`,
            navigateTo: `/bannerClicked?categoryId=${req.body.category}&type=${req.body.type}`
        }))
    }
    if (products.length > 0) {
        req.body.products = products.map((product, index) => ({
            img: `${process.env.API}/public/${product.filename}`,
            navigateTo: `/productClicked?categoryId=${req.body.category}&type=${req.body.type}`
        }))
    };

    req.body.createdBy = req.user._id;
    const categoryId = req.body.category;

    Page.findOne({category: categoryId})
    .exec((error, page) => {
        if (error) {
            return res.status(400).json({ error });
        }
        if (page) {
            Page.findOneAndUpdate({ category: categoryId}, req.body)
            .exec((error, updatePage) => {
                if (error) {
                    return res.status(400).json({ error });
                }
                if (updatePage){
                    return res.status(201).json({ page: updatePage });
                }
            })
        } else {
            const page = new Page(req.body);

            page.save((error, page) => {
                if (error) {
                    return res.status(400).json({error});
                }
                if (page) {
                    return res.status(201).json({ page });
                }
            })
        
        }
    })
    
}

exports.getPage = (req, res) => {
    const { category, type } = req.params;

    if (type === "page") {
        Page.findOne({ category: category}) 
        .exec((error, page) => {
            if (error) {
                return res.status(400).json({error});
            }
            if (page) {
                return res.status(201).json({ page });
            }
        })
    }
}