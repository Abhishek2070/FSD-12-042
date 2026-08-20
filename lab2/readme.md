# File System (F5 Module)
 fs module directly communicate with orating system rather than browser the common operations on a file or folder are -

 1- write file
    2- Read file 
    3- Append file
    #folder
    1-mkdirmd
    2-redmir7rm
    3-readdir
    #file metadat
    1-stat
    2-lstat
    3-rstat
    #Watch- watch/unwatch
    #stream'
    readstream()
    writestrream()
    all functions are promise so it must be called with await keyword  


# CRUD(CREATE , RETERIEVE, UPDATE, DELETE)
 assume we are making a cart related project 
1. user can add any product (id, name , price,quantity)
 into cart
 2. user can see all the items of the cart.
 3. user canremove items from cart.
 4. user can also update quantity ofproduct.
 5. all the items should be stored after a termination 
   of project.