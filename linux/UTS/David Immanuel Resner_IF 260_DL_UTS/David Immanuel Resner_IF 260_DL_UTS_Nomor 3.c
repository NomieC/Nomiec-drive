#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <sys/wait.h>

int main() {

    // defiine, create parent process
    pid_t child_pid, sub_child_pid;

    printf("Parent Process PID: %d\n", getpid());

    child_pid = fork();

    if (child_pid < 0) {

        fprintf(stderr, "Failed to fork\n");
        return 1;
    } else if (child_pid == 0) {

        // info child process
        printf("Child Process PID: %d (Parent PID: %d)\n", getpid(), getppid());

        // create sub child process
        sub_child_pid = fork();

        if (sub_child_pid < 0) {

            fprintf(stderr, "Failed to fork\n");
            return 1;
        } else if (sub_child_pid == 0) {

            // sub child Process
            printf("Sub-Child Process PID: %d (Parent PID: %d)\n", getpid(), getppid());

            sleep(10); // wait for a few seconds

            printf("Sub-Child Process PID: %d terminated\n", getpid());
            exit(0);
        } else {

            // child process out
            printf("Child Process PID: %d terminated\n", getpid());
            exit(0);
        }
    } else {

        // parent process, skip untill here
        sleep(5); // to create a zombie child
        wait(NULL); // wait for child process to terminate

        printf("Parent Process PID: %d terminated\n", getpid());
    }

    return 0;
}
