#include <stdio.h>
#include <stdlib.h>
#include <pthread.h>
#include <semaphore.h>

#define NUM_PROCESSES 5


typedef struct {

    int id;
    char *document;
} ProcessInfo;

// declare semaphore
sem_t printer_semaphore;

// print function
void *print_document(void *arg) {

    ProcessInfo *process = (ProcessInfo *)arg;

    // wait to using print set 1
    sem_wait(&printer_semaphore);

    // print
    printf("Proses %d start to print: %s\n", process->id, process->document);

    sleep(3);// printing

    // finish print
    printf("Proses %d print finished: %s\n", process->id, process->document);

    //  printer out, then set 0
    sem_post(&printer_semaphore);

    // exit thread
    pthread_exit(NULL);
}

int main() {
    pthread_t threads[NUM_PROCESSES];
    ProcessInfo processes[NUM_PROCESSES] = {

        {1, "Document 1"},
        {2, "Document 2"},
        {3, "Document 3"},
        {4, "Document 4"},
        {5, "Document 5"}
    };

    // init.
    sem_init(&printer_semaphore, 0, 1);

    // looping to print 5 process
    for (int i = 0; i < NUM_PROCESSES; i++) {

        if (pthread_create(&threads[i], NULL, print_document, (void *)&processes[i]) != 0) {
            fprintf(stderr, "Error creating thread\n");
            return 1;
        }
    }

    // waiting thread finished
    for (int i = 0; i < NUM_PROCESSES; i++) {

        pthread_join(threads[i], NULL);
    }

    // destroy semaphore after used
    sem_destroy(&printer_semaphore);

    return 0;
}
