const fs = require('fs');
const path = require('path');

module.exports = new class {

    all = (req, res) => {
        const dbFilePath = path.join(__dirname, '../../data/db.json');
        // Đọc nội dung từ tệp JSON
        fs.readFile(dbFilePath, 'utf8', (err, data) => {
            if (err) {
                console.error('Error reading data.json:', err);
                res.status(500).json({ error: 'Internal Server Error' });
                return;
            }

            try {
                // Parse dữ liệu JSON
                const jsonData = JSON.parse(data);

                // Lấy thông tin về danh mục
                const categories = jsonData.categories;

                // Trả về dữ liệu danh mục
                res.json({ categories });
            } catch (parseError) {
                console.error('Error parsing data.json:', parseError);
                res.status(500).json({ error: 'Internal Server Error' });
            }
        });
    };

};