#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <sys/types.h>
#include <sys/wait.h>

void parentProcess();
void childProcess1();
void childProcess2();

int main () {
    pid_t child1;
    int status;
    child1 = fork();
    if (child1<0){
        perror("fork1");
        exit(1);
    }

    if(child1 == 0 ) childProcess1();

    if(child1 > 0 ) parentProcess();
    waitpid(child1, &status, 0);
    printf("child process 1 sudah selesai .......\n");
    return 0;
}

void parentProcess(){
    pid_t child2;
    int status;
    child2 = fork();
    if(child2 < 0){
        perror("fork2");
        exit(1);
    }

    if(child2 == 0) childProcess2();

    if(child2 >0){
        for(int i = 0; i<10; i++){
            printf("%d. parent PID = %d\n", i++, getpid());
            printf("%d. parent PPID = %d\n", i++, getppid());
            sleep(2);
        }
        waitpid(child2, &status, 0);
        printf("child Process 2 sudah selesai.....\n");
    }
}

void childProcess1(){
    for(int i = 0; i<10; i++){
            printf("%d. parent PID = %d\n", i++, getpid());
            printf("%d. parent PPID = %d\n", i++, getppid());
            sleep(2);
        }
    exit(0);
}

void childProcess2(){
    for(int i = 0; i<10; i++){
            printf("%d. parent PID = %d\n", i++, getpid());
            printf("%d. parent PPID = %d\n", i++, getppid());
            sleep(2);
        }
    exit(0);
}