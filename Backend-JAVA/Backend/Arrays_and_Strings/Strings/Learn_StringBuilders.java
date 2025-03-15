
public class Learn_StringBuilders {
    public static void main(String[] args) {
        StringBuilder s1 = new StringBuilder();
        for (int i = 0; i < 26; i++) {
            s1.append((char) ('a' + i));
        }
        System.out.println(s1);

        s1.deleteCharAt(0);
        System.out.println(s1);

        s1.reverse();
        System.out.println(s1);

        for (int i = 0; i < args.length; i++) {
            
        }
    }
}
