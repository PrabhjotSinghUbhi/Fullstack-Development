#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
#include <string>
using namespace std;

int main()
{
    /* Enter your code here. Read input from STDIN. Print output to STDOUT */

    int marks[5];

    for (int i = 0; i < 5; i++)
    {
        cout << "enter " << i;
        cin >> marks[i];
    }

    int avg = 0;

    for (int i : marks)
    {
        avg += i;
    }

    cout << avg << endl;

    cout << avg / 5 << endl;

    string result = avg > 40 ? "Passed" : "Fail";

    cout << result;

    return 0;
}
