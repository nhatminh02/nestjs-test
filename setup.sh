#!/bin/bash
#Set quyền execute cho chính mình
chmod +x "$0"

# Kiểm tra xem MySQL đã được cài đặt và khởi động nó 
if ! systemctl is-active --quiet mysql; then
    echo "MySQL chưa được cài đặt hoặc đang tắt. Đang cài đặt và khởi động MySQL..."
    sudo apt-get install mysql-server -y
    sudo systemctl start mysql
fi

# Kiểm tra xem Apache2 đã được cài đặt và khởi động 
if ! systemctl is-active --quiet apache2; then
    echo "Apache2 chưa được cài đặt hoặc đang tắt. Đang cài đặt và khởi động Apache2..."
    sudo apt-get install apache2 -y
    sudo systemctl start apache2
fi
# Clone repository từ GitHub vào /var/www/html
mkdir /var/www/html/web
sudo git clone https://github.com/viethungtube/web-dbs.git /var/www/html/web
# Tạo database 'db_news' nếu chưa tồn tại
if ! mysql -u root -e 'use db_news' 2>/dev/null; then
    echo "Tạo database 'db_news'..."
    mysql -u root -e 'CREATE DATABASE db_news;'
fi

# Import dữ liệu từ file db_news.sql vào database 'db_news' 
if [ -f "/var/www/html/web/db_news.sql" ]; then
    echo "Importing dữ liệu từ file db_news.sql vào database 'db_news'..."
    mysql -u root db_news < /var/www/html/web/db_news.sql
else
    echo "Không tìm thấy tệp db_news.sql để import."
fi

# Tạo user trên Mysql: group5 | Secur4#Pa@sW0rld và set full quyền
echo "Tạo user'group5' trên mysql và set full quyền..."
mysql -u root -e "CREATE USER 'group5'@'localhost' IDENTIFIED BY 'Secur4#Pa@sW0rld'"
mysql -u root -e "GRANT ALL PRIVILEGES ON *.* TO 'group5'@'localhost'"
mysql -u root -e "FLUSH PRIVILEGES"
sudo systemctl restart mysql
sudo systemctl restart apache2
echo "Hoàn tất các bước."
echo "Link trang web: localhost/web , acc sql: group5 | Secur4#Pa@sW0rld"
