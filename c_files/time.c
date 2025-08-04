// converter.c
#include <math.h>

__attribute__((export_name("convert_ms")))
void convert_ms(int ms, int* result) {
    result[0] = floor(ms / 86400000); // days
    ms %= 86400000;
    result[1] = floor(ms / 3600000);  // hours
    ms %= 3600000;
    result[2] = floor(ms / 60000);   // minutes
    ms %= 60000;
    result[3] = floor(ms / 1000);    // seconds
    result[4] = ms % 1000;           // milliseconds
}
