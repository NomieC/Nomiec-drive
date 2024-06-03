#include <stdio.h>
#include <stdlib.h>
#include <string.h>

void array2D(){
  int **array = (int **)malloc(10 * sizeof(int *));
  int i, j;

  for (i = 0; i < 10; i++){
    array[i] = (int *)malloc(10 * sizeof(int));
  }

  for (i = 0; i < 10; i++){
    for (j = 0; j < 10; j++){
      array[i][j] = rand() % 10;
    }
  }

  for (i = 0; i < 10; i++){
    for (j = 0; j < 10; j++){
      printf("%d ", array[i][j]);
    }
    printf("\n");
  }

  // deallocate memory
  for(i = 0; i < 10; i++){
    free(array[i]);
  }
  free(array);
}

void print_welcome(){
    char *halo = "Selamat Datang";
    printf("%s\n", halo);
}

void print_to_txt(){
  FILE* fp;
  fp = fopen("kuis.txt", "w");
  for(int i = 0; i < 10; i++){
    fprintf(fp, "ini line %d\n", i + 1);
  }
  fclose(fp);
  printf("done\n");
}

int main(){
  int pilihan;
  do{
    printf("1. array2D\n");
    printf("2. printing \"Selamat Datang\"\n");
    printf("3. print to kuis.txt\n");
    printf("99. keluar\n");
    printf("Masukkan input: ");
    scanf("%d", &pilihan);

    switch(pilihan){
      case 1: array2D(); break;
      case 2: print_welcome(); break;
      case 3: print_to_txt(); break;
      case 99: return 0;
      default: printf("Salah input\n");
    }
  } while (pilihan != 99);

  return 0;
}
