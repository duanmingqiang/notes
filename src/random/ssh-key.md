1. 首先确认电脑已有公钥

``` bash
cd ~/.ssh
$ ls
authorized_keys2  id_dsa       known_hosts
config            id_dsa.pub
```
2. 需要寻找一对以 id_dsa 或 id_rsa 命名的文件，其中一个带有 .pub 扩展名。 .pub 文件是你的公钥，另一个则是私钥。 
3. 如果找不到这样的文件（或者根本没有 .ssh 目录），你可以通过运行 ssh-keygen程序来创建它们

``` bash
ssh-keygen -t rsa
```

4. .ssh如果不做特殊处理的话，一般是在C:\Users\Administrator目录下。如果看不到.ssh文件，可以使用ls -ah指令查看隐藏文件夹即可，这是存放秘钥的文件，打开这个文件会看到id_rsa和id_rsa.pub。id_rsa是私钥文件，id_rsa.pub是公钥文件。
5. 执行查看公钥的命令
``` bash
cat ~/.ssh/id_rsa.pub
```