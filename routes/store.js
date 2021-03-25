var express = require('express');
var router = express.Router();
var modelStore = require('../models/store')


router.get('/', modelStore.list);

router.get('/addnew', modelStore.addnew);
router.get('/transfer', modelStore.transfer);
router.post('/store', modelStore.create);
//router.put('/:id', modelCatalogs.update);
router.delete('/:id', modelStore.delete);

router.get('/edit/:id', function(req, res, next) {//tham số id để biết record cần chỉnh
  var id = req.params.id;
  res.send('Form chỉnh catalog' + id);
});
router.post('/update', function(req, res, next) {
    //tiếp nhận dữ liệu từ form edit để cập nhật catalog vào db
});
router.get('/delete/:id', function(req, res) { //tham số id để biết record cần xóa
  var id = req.params.id;
  res.send('Xóa catalog');
});

module.exports = router;