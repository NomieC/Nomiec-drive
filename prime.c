#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main(int argc, char *argv[]) {
        if(argc != 3) {
                perror("argumen hanya boleh tepat 2 buah!");
                exit(-1);
        }
        char  str[1000];
        sprintf(str, "cp -r %s %s", argv[1], argv[2]);
        
        if(system(str)) {
                printf("gagal");
        } else {
                printf("berhasil menyalin file %s ke %s", argv[1], argv[2]);
        }
        return 0;

}

