#include <stdio.h>
#include <stdlib.h>

int main() {
    int n, i, j, tracks[10], head, seekTime = 0, direction = 1;
    printf("Enter the number of tracks (min 5, max 10): ");
    scanf("%d", &n);
    printf("Enter the disk tracks: ");
    for(i=0; i<n; i++) {
        scanf("%d", &tracks[i]);
    }
    printf("Enter the initial head position: ");
    scanf("%d", &head);
    printf("\nAlgorithm: C-Scan\n");
    printf("Head Direction: ");
    if(head < tracks[0]) {
        printf("Towards the end\n");
        direction = 1;
        seekTime += tracks[0] - head;
        tracks[n] = tracks[0] - 1;
    }
    else {
        printf("Towards the beginning\n");
        direction = -1;
        seekTime += head - tracks[n-1];
        tracks[n] = tracks[n-1] + 1;
    }
    for(i=0; i<=n; i++) {
        printf("Seek %d -> %d + %d\n", tracks[i-1], tracks[i], direction*abs(tracks[i] - tracks[i-1]));
        seekTime += direction*abs(tracks[i] - tracks[i-1]);
    }
    printf("Total Seek Time: %d\n", seekTime);
    return 0;
}