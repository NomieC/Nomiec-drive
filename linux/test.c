#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <sys/types.h>
#include <sys/wait.h>

#define DELAY 5

int main() {
    pid_t parent_pid, child_pid, orphan_pid;
    parent_pid = getpid();

    printf("Parent Process: ID = %d\n", parent_pid);

    child_pid = fork();
    if (child_pid == 0) {
        sleep(3);
        printf("Child Process: ID = %d, Parent ID = %d\n", getpid(), parent_pid);
        orphan_pid = fork();
        if (orphan_pid == 0) {
            sleep(3);
            printf("Orphan Process: ID = %d, Parent ID = %d\n", getpid(), parent_pid);
            sleep(3);
            printf("Orphan Process: Waiting for 10 seconds before exiting.\n");
            sleep(10);
            printf("Orphan Process: Exiting.\n");
            exit(0);
        }

        printf("Child Process: Waiting for 5 seconds before exiting.\n");
        sleep(5);
        printf("Child Process: Exiting.\n");
        exit(0);
    }

    printf("Parent Process: Waiting for child processes to exit.\n");
    while (wait(NULL) > 0) {}

    printf("Parent Process: Exiting.\n");

    return 0;
}