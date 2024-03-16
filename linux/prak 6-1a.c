#include <stdio.h>
#include <semaphore.h>
#include <fcntl.h>
#include <stdlib.h>

int main() {
    int i;
    sem_t *mutex;
    // Membuka semaphore
    mutex = sem_open("Sem", O_CREAT, 0666, 1); // Buat semaphore jika belum ada

    if (mutex == SEM_FAILED) {
        perror("sem_open()");
        exit(1);
    }

    for (i = 0; i < 100; i++) {

        // Menunggu semaphore
        sem_wait(mutex);

        printf("buat ke %d\n",i);

        // Melepaskan semaphore
    }

    // Menutup semaphore
    sem_close(mutex);

    // Menghapus semaphore dari sistem
    sem_unlink("Sem");

    return 0;
}
