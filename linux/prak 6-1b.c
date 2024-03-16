#include <stdio.h>
#include <semaphore.h>
#include <fcntl.h>
#include <stdlib.h>

int main  (){
    int i; 
    sem_t *mutex;
    mutex = sem_open("Sem", O_RDONLY, 0666, 1);

    if(mutex == SEM_FAILED){
        perror("sem_open()");
        exit(1);
    }
    for(i=0; i<100; i++){
        printf("ambil ke %d\n",i);
        sem_post("Sem");
    }

    return 0;
    sem_unlink("Sem");
}
