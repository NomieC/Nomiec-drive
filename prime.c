#include <stdio.h>

int main()
{
    int i, j;
    int flag = 0;
        // for(i = 0; i < 100; i++){
        //     for(j = 2; j < 10; j++){
        //         if(i % j == 0){
        //             flag = 1;
        //             if(flag == 1)
        //                 break;
        //         }
        //         printf("%d ", i);
        //     } 
        // }
    

        for ( i = 0; i < 1000; i++)
        {
            if (i%2!=0&&i%3!=0&&i%5!=0&&i%7!=0)
            {
                printf("%d ",i);
            }
            
        }
        
    return 0;
}
