# 개발환경에서는 본 myqsl을 db 로 사용하되
# 배포환경에서는 aws rds 를 사용(보완이 좋고 현업에서 많이 쓴다함)

# 베이스이미지는 mysql! 
FROM mysql:5.7

# 컨테이너 안 mysql설정파일에 내가만든 설정파일을 복사
ADD ./my.cnf /etc/mysql/conf.d/my.cnf