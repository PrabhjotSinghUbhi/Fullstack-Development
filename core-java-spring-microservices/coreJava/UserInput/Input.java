package UserInput;

import java.util.Scanner;

public class Input {
    public static void main(String[] args) throws Exception {
        // InputStreamReader in = new InputStreamReader(System.in);
        // BufferedReader bf = new BufferedReader(in);

        // System.out.print("Enter a Number: ");
        // int num = Integer.parseInt(bf.readLine());

        // System.out.println(num);

        Scanner in = new Scanner(System.in);
        int num = in.nextInt();

        System.out.println(num);
    }
}
