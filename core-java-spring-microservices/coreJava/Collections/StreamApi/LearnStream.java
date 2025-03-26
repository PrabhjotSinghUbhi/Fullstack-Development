package Collections.StreamApi;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Stream;

import javax.sound.sampled.SourceDataLine;

public class LearnStream {
    public static void main(String[] args) {
        // List<Integer> list = new ArrayList<>();
        // list.add(1);
        // list.add(2);
        // list.add(3);
        // list.add(4);
        // list.add(5);

        // better way to do the similar thing is
        List<Integer> list = Arrays.asList(1, 2, 3, 4, 5, 6, 7);

        // Method 1 :
        // for (Object i : list) {
        // System.out.println(i );
        // }

        // Method 2
        // for(int i = 0; i < list.size(); i++){
        // System.out.println(list.get(i));
        // }

        // Method 3 -> New
        // list.forEach(n -> System.out.println(n));

        // let's talk about Streams
        // Streams can only be used one 1 time.
        // Stream provides us with many methods.
        // what ever we do this stream it will not effect the list.

        // Stream<Integer> s1 = list.stream();
        // // new Stream
        // Stream<Integer> s2 = s1.filter(n -> n % 2 == 0);
        // // s2.forEach(n -> System.out.println(n));
        // // new Stream
        // Stream<Integer> s3 = s2.map(n -> n * 2);
        // // s3.forEach(n -> System.out.println(n));
        // int result = s3.reduce(0, (c, e) -> c + e);
        // System.out.println(result);

        // now after that whole story.
        // this is the easy way.

        int result = list.stream()
                            .filter(n -> n%2 == 0)
                            .map(n -> n * 2)
                            .reduce(0 , (c,e)-> c + e);

        System.out.println(result);
    }
}
