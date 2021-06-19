import 'dart:math';

import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

void main() {
  runApp(GymneratorApp());
}

class GymneratorApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: GymneratorHomePage(),
    );
  }
}

class GymneratorHomePage extends StatefulWidget {
  const GymneratorHomePage({Key? key}) : super(key: key);

  @override
  _GymneratorHomePageState createState() => _GymneratorHomePageState();
}

class _GymneratorHomePageState extends State<GymneratorHomePage> {
  final names = [
    'Body',
    'Build',
    'Force',
    'Form',
    'Shape',
    'Energy',
    'Life',
    'Sport',
    'Fit',
    'Fitness',
    'Tech',
    'Gym',
    'Smart',
    'Total'
  ];

  String firstName = '', secondName = '';

  getRandomNames() {
    final _random = Random();

    firstName = names[_random.nextInt(names.length)];
    secondName = names[_random.nextInt(names.length)];
    while (firstName == secondName) {
      secondName = names[_random.nextInt(names.length)];
    }
    print('$firstName $secondName');
  }

  @override
  Widget build(BuildContext context) {
    return Material(
      color: Colors.black,
      child: Container(
        decoration: BoxDecoration(),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Container(
                margin: EdgeInsets.symmetric(horizontal: 50.0),
                child: Image.asset('assets/logo.png')),
            SizedBox(
              height: 30,
            ),
            SizedBox(
              height: 30,
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Container(
                  decoration: BoxDecoration(
                    border: Border(
                      bottom: BorderSide(color: Colors.white),
                    ),
                  ),
                  child: Text(
                    '${firstName.toUpperCase()} ${secondName.toUpperCase()}',
                    style: TextStyle(color: Colors.white, fontSize: 40),
                  ),
                ),
                Icon(
                  Icons.block_flipped,
                  size: 20,
                  color: Colors.white,
                )
              ],
            ),
            SizedBox(
              height: 30,
            ),
            GestureDetector(
              onTap: () {
                setState(() {
                  getRandomNames();
                });
              },
              child: Container(
                padding: EdgeInsets.all(15),
                decoration: BoxDecoration(
                  border: Border.all(color: Colors.white),
                ),
                child: Text(
                  'GENERATE',
                  style: TextStyle(
                      color: Colors.white,
                      fontWeight: FontWeight.bold,
                      letterSpacing: 2),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
