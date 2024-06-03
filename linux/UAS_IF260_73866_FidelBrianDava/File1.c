#include <stdio.h>
#include <stdlib.h>

void create_dynamic_memory_leak() {
 int *ptr = (int *)malloc(sizeof(int));
 free(ptr);
}
void access_uninitialized_memory() {
 int *ptr = NULL;
 // Ini mengakses memori yang tidak diinisialisasi
 printf("%d\n", *ptr);
}
int main() {
 create_dynamic_memory_leak();
 access_uninitialized_memory();
 return 0;
}
