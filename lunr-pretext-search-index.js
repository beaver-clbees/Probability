var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "shorttitlelowercase-2",
  "level": "1",
  "url": "shorttitlelowercase-2.html",
  "type": "Worksheet",
  "number": "1",
  "title": "Basic Definitions (1.1a)",
  "body": " Basic Definitions (1.1a)    Random Experiment   An experiment where the outcome cannot be predicted with certainty.     Sample Space   The set of all possible outcomes of a random experiment is called a sample space, S (also called outcome space, or just space).      Flip a coin and record the face that is showing:      Roll two dice and add the faces showing:       Flip two coins. Record the faces:      Flip two coins. Determine if they are the same:      Flip a coin until a heads appears. Record the number of flips needed:      Flip a coin until you get two heads in a row. Record how long (time) it takes:       Event   An event is a collection of outcomes in a sample space.    Notice that a sample space S is a set, and an event is a subset of S. We will review some basics of sets and see how they can be represented with Venn Diagrams. Our universal set is always our sample space in this context because the sample space contains all possible outcomes. We will assume all sets and elements are in S.   Empty or Null Set    denotes the empty or null set (the set containing no elements).       B indicates A is a subset of B. Draw and shade set A so it is a subset of B.          is the union of sets A and B. Elements in the union might be in A or in B or in both A and B. Shade           is the intersection of A and B. Elements in the intersection are in A and also in B. Shade .            is the complement of A (all elements in S that are NOT in A). Shade .          and are mutually exclusive or disjoint if . Sketch two mutually exclusive sets sets.         A and B are exhaustive if Make a sketch of two sets that are exhaustive.       These definitions extend to larger numbers of subsets. For example, given      are mutually exclusive events if for (they are pairwise disjoint).     are exhaustive events if       We are interested in computing the probability of an event A in our sample space. We can approximate the probability by repeating the experiment n times. Let N(A) be the number of times an outcome of the experiment is in the event (subset) A. Then we can approximate the probability of A as    which is called the relative frequency of the event A in these n repetitions of the experiment.  Note that if n is small and a few of us do this experiment we may get wildly different answers. However as n gets larger and larger, this fraction will tend to stabilize and we call it the probability of event A . You can think of it as  (Probability of A)     Suppose we have a fair, six sided die and we want to know the probability of the event, E that it will show an even number. Find the sample space S and E. What do you expect for P(E)?    Next we give the formal definition of a probability function.   Probability   Probability is a real-valued set function, P, that assigns to each event A in the sample space S, a number P(A), called the probability of the event A such that the following properties are satisfied:              If are events and (mutually disjoint) then for each positive integer k and for any countable (possibly infinite) number of events.        Sometimes you can use mathematics to determine what the probability function should be under given conditions. For example in the 6-sided die example, if the die is fair, then Let Let G be the set of odd outcomes.                                                   Equally Likely Outcomes   Suppose we have a random experiment with m outcomes and sample space . If each of the outcomes in S has the same probability of occurring (e.g. roll a fair die), then we say that each of the m outcomes are equally likely. In that case,         This makes it easy to determine the probability of an event: If is an event, with h outcomes, then      Standard deck of cards    Draw one card at random from a standard 52 card deck. The sample space is the collection of 52 cards. Assume that each card is equally likely to be chosen (i.e., that a card is drawn 'at random'). Thus the probability function assigns a probability of to each of the outcomes.  Let                        Determine the following probabilities. Write answer as a fraction (do not reduce).                                             Shade the regions indicated.                 Express the shaded regions using set notation.         Suppose a dart is thrown at the picture below. Assume it lands in the sample space, S. Let A be the event the dart lands in rectangle A and let B be the event the dart lands in rectangle B. Estimate the following probabilities and be prepared to justify your estimates.                                         "
},
{
  "id": "def-ranexp",
  "level": "2",
  "url": "shorttitlelowercase-2.html#def-ranexp",
  "type": "Definition",
  "number": "1.1",
  "title": "Random Experiment.",
  "body": " Random Experiment   An experiment where the outcome cannot be predicted with certainty.   "
},
{
  "id": "def-samplespace",
  "level": "2",
  "url": "shorttitlelowercase-2.html#def-samplespace",
  "type": "Definition",
  "number": "1.2",
  "title": "Sample Space.",
  "body": " Sample Space   The set of all possible outcomes of a random experiment is called a sample space, S (also called outcome space, or just space).   "
},
{
  "id": "shorttitlelowercase-2-2-3",
  "level": "2",
  "url": "shorttitlelowercase-2.html#shorttitlelowercase-2-2-3",
  "type": "Worksheet Exercise",
  "number": "1.1",
  "title": "",
  "body": "  Flip a coin and record the face that is showing:   "
},
{
  "id": "shorttitlelowercase-2-2-4",
  "level": "2",
  "url": "shorttitlelowercase-2.html#shorttitlelowercase-2-2-4",
  "type": "Worksheet Exercise",
  "number": "1.2",
  "title": "",
  "body": "  Roll two dice and add the faces showing:    "
},
{
  "id": "shorttitlelowercase-2-2-5",
  "level": "2",
  "url": "shorttitlelowercase-2.html#shorttitlelowercase-2-2-5",
  "type": "Worksheet Exercise",
  "number": "1.3",
  "title": "",
  "body": "  Flip two coins. Record the faces:   "
},
{
  "id": "shorttitlelowercase-2-2-6",
  "level": "2",
  "url": "shorttitlelowercase-2.html#shorttitlelowercase-2-2-6",
  "type": "Worksheet Exercise",
  "number": "1.4",
  "title": "",
  "body": "  Flip two coins. Determine if they are the same:   "
},
{
  "id": "shorttitlelowercase-2-2-7",
  "level": "2",
  "url": "shorttitlelowercase-2.html#shorttitlelowercase-2-2-7",
  "type": "Worksheet Exercise",
  "number": "1.5",
  "title": "",
  "body": "  Flip a coin until a heads appears. Record the number of flips needed:   "
},
{
  "id": "shorttitlelowercase-2-2-8",
  "level": "2",
  "url": "shorttitlelowercase-2.html#shorttitlelowercase-2-2-8",
  "type": "Worksheet Exercise",
  "number": "1.6",
  "title": "",
  "body": "  Flip a coin until you get two heads in a row. Record how long (time) it takes:   "
},
{
  "id": "shorttitlelowercase-2-3-1",
  "level": "2",
  "url": "shorttitlelowercase-2.html#shorttitlelowercase-2-3-1",
  "type": "Definition",
  "number": "1.3",
  "title": "Event.",
  "body": " Event   An event is a collection of outcomes in a sample space.   "
},
{
  "id": "def-emptyset",
  "level": "2",
  "url": "shorttitlelowercase-2.html#def-emptyset",
  "type": "Definition",
  "number": "1.4",
  "title": "Empty or Null Set.",
  "body": " Empty or Null Set    denotes the empty or null set (the set containing no elements).   "
},
{
  "id": "shorttitlelowercase-2-3-4",
  "level": "2",
  "url": "shorttitlelowercase-2.html#shorttitlelowercase-2-3-4",
  "type": "Worksheet Exercise",
  "number": "1.7",
  "title": "",
  "body": "   B indicates A is a subset of B. Draw and shade set A so it is a subset of B.      "
},
{
  "id": "shorttitlelowercase-2-3-5",
  "level": "2",
  "url": "shorttitlelowercase-2.html#shorttitlelowercase-2-3-5",
  "type": "Worksheet Exercise",
  "number": "1.8",
  "title": "",
  "body": "   is the union of sets A and B. Elements in the union might be in A or in B or in both A and B. Shade       "
},
{
  "id": "shorttitlelowercase-2-3-6",
  "level": "2",
  "url": "shorttitlelowercase-2.html#shorttitlelowercase-2-3-6",
  "type": "Worksheet Exercise",
  "number": "1.9",
  "title": "",
  "body": "   is the intersection of A and B. Elements in the intersection are in A and also in B. Shade .      "
},
{
  "id": "shorttitlelowercase-2-4-1",
  "level": "2",
  "url": "shorttitlelowercase-2.html#shorttitlelowercase-2-4-1",
  "type": "Worksheet Exercise",
  "number": "1.10",
  "title": "",
  "body": "   is the complement of A (all elements in S that are NOT in A). Shade .      "
},
{
  "id": "shorttitlelowercase-2-4-2",
  "level": "2",
  "url": "shorttitlelowercase-2.html#shorttitlelowercase-2-4-2",
  "type": "Worksheet Exercise",
  "number": "1.11",
  "title": "",
  "body": "   and are mutually exclusive or disjoint if . Sketch two mutually exclusive sets sets.      "
},
{
  "id": "shorttitlelowercase-2-4-3",
  "level": "2",
  "url": "shorttitlelowercase-2.html#shorttitlelowercase-2-4-3",
  "type": "Worksheet Exercise",
  "number": "1.12",
  "title": "",
  "body": "  A and B are exhaustive if Make a sketch of two sets that are exhaustive.      "
},
{
  "id": "shorttitlelowercase-2-5-6",
  "level": "2",
  "url": "shorttitlelowercase-2.html#shorttitlelowercase-2-5-6",
  "type": "Worksheet Exercise",
  "number": "1.13",
  "title": "",
  "body": "  Suppose we have a fair, six sided die and we want to know the probability of the event, E that it will show an even number. Find the sample space S and E. What do you expect for P(E)?   "
},
{
  "id": "def-probability",
  "level": "2",
  "url": "shorttitlelowercase-2.html#def-probability",
  "type": "Definition",
  "number": "1.5",
  "title": "Probability.",
  "body": " Probability   Probability is a real-valued set function, P, that assigns to each event A in the sample space S, a number P(A), called the probability of the event A such that the following properties are satisfied:              If are events and (mutually disjoint) then for each positive integer k and for any countable (possibly infinite) number of events.     "
},
{
  "id": "shorttitlelowercase-2-6-2-1",
  "level": "2",
  "url": "shorttitlelowercase-2.html#shorttitlelowercase-2-6-2-1",
  "type": "Worksheet Exercise",
  "number": "1.14",
  "title": "",
  "body": "      "
},
{
  "id": "shorttitlelowercase-2-6-2-2",
  "level": "2",
  "url": "shorttitlelowercase-2.html#shorttitlelowercase-2-6-2-2",
  "type": "Worksheet Exercise",
  "number": "1.15",
  "title": "",
  "body": "      "
},
{
  "id": "shorttitlelowercase-2-6-3-1",
  "level": "2",
  "url": "shorttitlelowercase-2.html#shorttitlelowercase-2-6-3-1",
  "type": "Worksheet Exercise",
  "number": "1.16",
  "title": "",
  "body": "      "
},
{
  "id": "shorttitlelowercase-2-6-3-2",
  "level": "2",
  "url": "shorttitlelowercase-2.html#shorttitlelowercase-2-6-3-2",
  "type": "Worksheet Exercise",
  "number": "1.17",
  "title": "",
  "body": "      "
},
{
  "id": "shorttitlelowercase-2-6-4-1",
  "level": "2",
  "url": "shorttitlelowercase-2.html#shorttitlelowercase-2-6-4-1",
  "type": "Worksheet Exercise",
  "number": "1.18",
  "title": "",
  "body": "      "
},
{
  "id": "shorttitlelowercase-2-6-4-2",
  "level": "2",
  "url": "shorttitlelowercase-2.html#shorttitlelowercase-2-6-4-2",
  "type": "Worksheet Exercise",
  "number": "1.19",
  "title": "",
  "body": "      "
},
{
  "id": "shorttitlelowercase-2-6-7",
  "level": "2",
  "url": "shorttitlelowercase-2.html#shorttitlelowercase-2-6-7",
  "type": "Worksheet Exercise",
  "number": "1.20",
  "title": "",
  "body": "      "
},
{
  "id": "deck_of_cards",
  "level": "2",
  "url": "shorttitlelowercase-2.html#deck_of_cards",
  "type": "Figure",
  "number": "1.6",
  "title": "",
  "body": " Standard deck of cards   "
},
{
  "id": "shorttitlelowercase-2-7-6-1",
  "level": "2",
  "url": "shorttitlelowercase-2.html#shorttitlelowercase-2-7-6-1",
  "type": "Worksheet Exercise",
  "number": "1.21",
  "title": "",
  "body": "      "
},
{
  "id": "shorttitlelowercase-2-7-6-2",
  "level": "2",
  "url": "shorttitlelowercase-2.html#shorttitlelowercase-2-7-6-2",
  "type": "Worksheet Exercise",
  "number": "1.22",
  "title": "",
  "body": "      "
},
{
  "id": "shorttitlelowercase-2-7-7-1",
  "level": "2",
  "url": "shorttitlelowercase-2.html#shorttitlelowercase-2-7-7-1",
  "type": "Worksheet Exercise",
  "number": "1.23",
  "title": "",
  "body": "      "
},
{
  "id": "shorttitlelowercase-2-7-7-2",
  "level": "2",
  "url": "shorttitlelowercase-2.html#shorttitlelowercase-2-7-7-2",
  "type": "Worksheet Exercise",
  "number": "1.24",
  "title": "",
  "body": "      "
},
{
  "id": "shorttitlelowercase-2-7-8",
  "level": "2",
  "url": "shorttitlelowercase-2.html#shorttitlelowercase-2-7-8",
  "type": "Worksheet Exercise",
  "number": "1.25",
  "title": "",
  "body": "      "
},
{
  "id": "shorttitlelowercase-2-8-1",
  "level": "2",
  "url": "shorttitlelowercase-2.html#shorttitlelowercase-2-8-1",
  "type": "Worksheet Exercise",
  "number": "1.26",
  "title": "",
  "body": "  Shade the regions indicated.              "
},
{
  "id": "shorttitlelowercase-2-8-2",
  "level": "2",
  "url": "shorttitlelowercase-2.html#shorttitlelowercase-2-8-2",
  "type": "Worksheet Exercise",
  "number": "1.27",
  "title": "",
  "body": "  Express the shaded regions using set notation.    "
},
{
  "id": "shorttitlelowercase-2-9-1-2",
  "level": "2",
  "url": "shorttitlelowercase-2.html#shorttitlelowercase-2-9-1-2",
  "type": "Worksheet Exercise",
  "number": "1.28",
  "title": "",
  "body": "      "
},
{
  "id": "shorttitlelowercase-2-9-1-3",
  "level": "2",
  "url": "shorttitlelowercase-2.html#shorttitlelowercase-2-9-1-3",
  "type": "Worksheet Exercise",
  "number": "1.29",
  "title": "",
  "body": "      "
},
{
  "id": "shorttitlelowercase-2-9-1-4",
  "level": "2",
  "url": "shorttitlelowercase-2.html#shorttitlelowercase-2-9-1-4",
  "type": "Worksheet Exercise",
  "number": "1.30",
  "title": "",
  "body": "      "
},
{
  "id": "shorttitlelowercase-2-9-1-5",
  "level": "2",
  "url": "shorttitlelowercase-2.html#shorttitlelowercase-2-9-1-5",
  "type": "Worksheet Exercise",
  "number": "1.31",
  "title": "",
  "body": "      "
},
{
  "id": "shorttitlelowercase-2-9-1-6",
  "level": "2",
  "url": "shorttitlelowercase-2.html#shorttitlelowercase-2-9-1-6",
  "type": "Worksheet Exercise",
  "number": "1.32",
  "title": "",
  "body": "      "
},
{
  "id": "shorttitlelowercase-3",
  "level": "1",
  "url": "shorttitlelowercase-3.html",
  "type": "Worksheet",
  "number": "2",
  "title": "Properties of Sets (1.1b)",
  "body": "Properties of Sets (1.1b)   Commutative laws        Associative Laws                                                              Distributive Laws                                                              De Morgan's Laws                                                       Complementary Probability   For each event A,        Proof:        Probability of Empty Set    .       Proof:      Probability of Subset   If , then .       Proof:              Probability of an Event is less than 1   If , then .     Proof:      Inclusion-Exclusion Probability (Union)   For any two events A and B, .     Proof:              In the following, suppose that A and B are events in a sample space S.    If and , then find .        If and , then find .      If and , then find .     Inclusion-Exclusion Probability (Union of Three Events)   For any three events A, B, and C, (fill in)        Sketch of Proof:          Suppose A and B are subsets of the sample space S. If , and , then find the following:                   Fill in the Venn diagram with the appropriate probabilities in each region.                                    Suppose A and B are subsets of the sample space S. If , , then find          An insurance company looks at its auto insurance customers and finds that   all insure at least one car    85% insure more than one car    23% insure a sports car    17% insure more than one car, including a sports car    Find the probability that a customer selected at random insures exactly one car and it is not a sports car.   Hint : Let the sample space be the set of all people who insure at least one car. Let be the set of people insuring more than one car and be the set of people insuring a sports car. Draw a Venn diagram.       A survey of 1000 people found that 400 people had a pet, 300 people had a child, and 200 people had both a pet and a child.     If a person is selected at random, find the probability that the person has either a pet or a child.      Is it reasonable to assume that all of the outcomes in your sample space are equally likely? Explain         Two dice are rolled and the values shown on top are observed.     Write down a sample space for the experiment in such a way that each outcome in the sample space is equally likely.      What is the probability the sum of the two die is 7?      What is the probability the sum of the two die is at least 4?      What is the probability the sum of the two die is at most 11?      "
},
{
  "id": "thm-complement",
  "level": "2",
  "url": "shorttitlelowercase-3.html#thm-complement",
  "type": "Theorem",
  "number": "2.1",
  "title": "Complementary Probability.",
  "body": " Complementary Probability   For each event A,    "
},
{
  "id": "shorttitlelowercase-3-4-9",
  "level": "2",
  "url": "shorttitlelowercase-3.html#shorttitlelowercase-3-4-9",
  "type": "Worksheet Exercise",
  "number": "2.1",
  "title": "",
  "body": "   Proof:    "
},
{
  "id": "thm-emptyset",
  "level": "2",
  "url": "shorttitlelowercase-3.html#thm-emptyset",
  "type": "Theorem",
  "number": "2.2",
  "title": "Probability of Empty Set.",
  "body": " Probability of Empty Set    .   "
},
{
  "id": "shorttitlelowercase-3-5-2",
  "level": "2",
  "url": "shorttitlelowercase-3.html#shorttitlelowercase-3-5-2",
  "type": "Worksheet Exercise",
  "number": "2.2",
  "title": "",
  "body": "   Proof:    "
},
{
  "id": "thm-subset",
  "level": "2",
  "url": "shorttitlelowercase-3.html#thm-subset",
  "type": "Theorem",
  "number": "2.3",
  "title": "Probability of Subset.",
  "body": " Probability of Subset   If , then .   "
},
{
  "id": "shorttitlelowercase-3-5-4",
  "level": "2",
  "url": "shorttitlelowercase-3.html#shorttitlelowercase-3-5-4",
  "type": "Worksheet Exercise",
  "number": "2.3",
  "title": "",
  "body": "   Proof:            "
},
{
  "id": "thm-less-than-one",
  "level": "2",
  "url": "shorttitlelowercase-3.html#thm-less-than-one",
  "type": "Theorem",
  "number": "2.4",
  "title": "Probability of an Event is less than 1.",
  "body": " Probability of an Event is less than 1   If , then .   "
},
{
  "id": "shorttitlelowercase-3-5-6",
  "level": "2",
  "url": "shorttitlelowercase-3.html#shorttitlelowercase-3-5-6",
  "type": "Worksheet Exercise",
  "number": "2.4",
  "title": "",
  "body": " Proof:  "
},
{
  "id": "shorttitlelowercase-3-6-1",
  "level": "2",
  "url": "shorttitlelowercase-3.html#shorttitlelowercase-3-6-1",
  "type": "Theorem",
  "number": "2.5",
  "title": "Inclusion-Exclusion Probability (Union).",
  "body": " Inclusion-Exclusion Probability (Union)   For any two events A and B, .   "
},
{
  "id": "shorttitlelowercase-3-6-2",
  "level": "2",
  "url": "shorttitlelowercase-3.html#shorttitlelowercase-3-6-2",
  "type": "Worksheet Exercise",
  "number": "2.5",
  "title": "",
  "body": " Proof:             "
},
{
  "id": "shorttitlelowercase-3-6-4",
  "level": "2",
  "url": "shorttitlelowercase-3.html#shorttitlelowercase-3-6-4",
  "type": "Worksheet Exercise",
  "number": "2.6",
  "title": "",
  "body": "  If and , then find .   "
},
{
  "id": "shorttitlelowercase-3-7-1",
  "level": "2",
  "url": "shorttitlelowercase-3.html#shorttitlelowercase-3-7-1",
  "type": "Worksheet Exercise",
  "number": "2.7",
  "title": "",
  "body": "  If and , then find .   "
},
{
  "id": "shorttitlelowercase-3-7-2",
  "level": "2",
  "url": "shorttitlelowercase-3.html#shorttitlelowercase-3-7-2",
  "type": "Worksheet Exercise",
  "number": "2.8",
  "title": "",
  "body": "  If and , then find .   "
},
{
  "id": "thm-inclusion-exclusion-three",
  "level": "2",
  "url": "shorttitlelowercase-3.html#thm-inclusion-exclusion-three",
  "type": "Theorem",
  "number": "2.6",
  "title": "Inclusion-Exclusion Probability (Union of Three Events).",
  "body": " Inclusion-Exclusion Probability (Union of Three Events)   For any three events A, B, and C, (fill in)      "
},
{
  "id": "shorttitlelowercase-3-7-4",
  "level": "2",
  "url": "shorttitlelowercase-3.html#shorttitlelowercase-3-7-4",
  "type": "Worksheet Exercise",
  "number": "2.9",
  "title": "",
  "body": " Sketch of Proof:     "
},
{
  "id": "shorttitlelowercase-3-8-1",
  "level": "2",
  "url": "shorttitlelowercase-3.html#shorttitlelowercase-3-8-1",
  "type": "Worksheet Exercise",
  "number": "2.10",
  "title": "",
  "body": "  Suppose A and B are subsets of the sample space S. If , and , then find the following:                   Fill in the Venn diagram with the appropriate probabilities in each region.                               "
},
{
  "id": "shorttitlelowercase-3-9-1",
  "level": "2",
  "url": "shorttitlelowercase-3.html#shorttitlelowercase-3-9-1",
  "type": "Worksheet Exercise",
  "number": "2.11",
  "title": "",
  "body": "  Suppose A and B are subsets of the sample space S. If , , then find       "
},
{
  "id": "shorttitlelowercase-3-9-2",
  "level": "2",
  "url": "shorttitlelowercase-3.html#shorttitlelowercase-3-9-2",
  "type": "Worksheet Exercise",
  "number": "2.12",
  "title": "",
  "body": "  An insurance company looks at its auto insurance customers and finds that   all insure at least one car    85% insure more than one car    23% insure a sports car    17% insure more than one car, including a sports car    Find the probability that a customer selected at random insures exactly one car and it is not a sports car.   Hint : Let the sample space be the set of all people who insure at least one car. Let be the set of people insuring more than one car and be the set of people insuring a sports car. Draw a Venn diagram.    "
},
{
  "id": "shorttitlelowercase-3-9-3",
  "level": "2",
  "url": "shorttitlelowercase-3.html#shorttitlelowercase-3-9-3",
  "type": "Worksheet Exercise",
  "number": "2.13",
  "title": "",
  "body": "  A survey of 1000 people found that 400 people had a pet, 300 people had a child, and 200 people had both a pet and a child.     If a person is selected at random, find the probability that the person has either a pet or a child.      Is it reasonable to assume that all of the outcomes in your sample space are equally likely? Explain    "
},
{
  "id": "shorttitlelowercase-3-10-1",
  "level": "2",
  "url": "shorttitlelowercase-3.html#shorttitlelowercase-3-10-1",
  "type": "Worksheet Exercise",
  "number": "2.14",
  "title": "",
  "body": "  Two dice are rolled and the values shown on top are observed.     Write down a sample space for the experiment in such a way that each outcome in the sample space is equally likely.      What is the probability the sum of the two die is 7?      What is the probability the sum of the two die is at least 4?      What is the probability the sum of the two die is at most 11?    "
},
{
  "id": "shorttitlelowercase-4",
  "level": "1",
  "url": "shorttitlelowercase-4.html",
  "type": "Worksheet",
  "number": "3",
  "title": "Methods of Enumeration (1.2)",
  "body": "Methods of Enumeration (1.2)    Multiplication Principle: Suppose 2 experiments are performed, and . If has possible outcomes and has possible outcomes, then the composite experiment of performing followed by has possible outcomes.     Example Let be the experiment of selecting at random a pair of socks out of your drawer containing yellow(y), pink(p) and white(w) socks. Let be the experiment of selecting either black(bl) or grey(gr) shoes. Then the sample space for the experiment of doing followed by is all (sock,shoe) possible combinations.     List all outcomes in the sample space:      Alternatively we could model it with a tree diagram:        General Multiplication rule: If experiments has outcomes respectively after previous experiments have been performed, then the composite experiment of performing followed by , ... has the following number of possible outcomes:         Examples:      How many different digit phone numbers are possible if the first number cannot be a or ?      How many different license plates of the form LETTER LETTER LETTER DIGIT DIGIT DIGIT are there?      I have different pictures to hang on the wall. In how many different ways can I arrange them in a row?      In a class of students, how many ways are there to elect a president, vice president, and treasurer? (Assume no student can hold more than one office.)     More generally suppose we want to arrange different things in a row. How many ways?    Permutation (B:1.2.1)   A permutation is an arrangement of objects in a row where order matters.        The total number of permutations on different objects is:      If we had different things and wanted to arrange just of them in a row, we'd have this many ways:   We denote the number of such arrangements by     (B:1.2-2)   Each of the arrangements is called a permutation on objects taken at a time.       There are people in a race. How many finishing orders are there?       There are people in a race. How many ways to award first, second, and third place?     (B:1.2-3)   If objects are selected from a set of objects, and if the order of the selection is noted, then the selected set of objects is called           (B:1.2-4\/5)    Sampling with replacement occurs when an object is selected and then replaced before the next object is selected. Sampling without replacement occurs when an object is not replaced after it has been selected.     Examples:     A state lottery selects balls numbered one at a time. After each ball is selected, it is put back. How many possible outcomes are there? (Assume order matters)      Suppose in the above lottery the balls are not put back after being selected. How many possible outcomes are there? (Assume order matters)    We note that given different objects, the number of ordered samples of size is:  with replacement:    without replacement:    Example - Unordered sets     How many ways are there to select three people from the set         Denote by the number of unordered sets of size .  Then the number of ordered sets is     (B:1.2-6)   Each of the unordered subsets is called a        Examples:     A committee of is to be chosen from a group of people - how many ways?      How many different ways are there to deal a card hand from a standard card deck?       Back to probability. Let be the number of outcomes in event . If all outcomes in a sample space are equally likely, then the probability of an event is . So knowing how to count helps us compute probabilities.    A committee of is to be chosen from . What is the probability that will be chosen?      What is the probability that a random -card hand (from a standard card deck) consists of all diamonds?    Notation and Formulas     The number of permutations on distinct objects taken at a time is denoted by or and is given by .    For example, .      The number of combinations (unordered sets) of distinct objects taken at a time is denoted by , , or (read \"n choose r\") and is given by .    For example, .       "
},
{
  "id": "shorttitlelowercase-4-2-2",
  "level": "2",
  "url": "shorttitlelowercase-4.html#shorttitlelowercase-4-2-2",
  "type": "Worksheet Exercise",
  "number": "3.1",
  "title": "",
  "body": "   Example Let be the experiment of selecting at random a pair of socks out of your drawer containing yellow(y), pink(p) and white(w) socks. Let be the experiment of selecting either black(bl) or grey(gr) shoes. Then the sample space for the experiment of doing followed by is all (sock,shoe) possible combinations.     List all outcomes in the sample space:      Alternatively we could model it with a tree diagram:    "
},
{
  "id": "shorttitlelowercase-4-2-3",
  "level": "2",
  "url": "shorttitlelowercase-4.html#shorttitlelowercase-4-2-3",
  "type": "Worksheet Exercise",
  "number": "3.2",
  "title": "",
  "body": "   General Multiplication rule: If experiments has outcomes respectively after previous experiments have been performed, then the composite experiment of performing followed by , ... has the following number of possible outcomes:   "
},
{
  "id": "shorttitlelowercase-4-3-1",
  "level": "2",
  "url": "shorttitlelowercase-4.html#shorttitlelowercase-4-3-1",
  "type": "Worksheet Exercise",
  "number": "3.3",
  "title": "",
  "body": "   Examples:      How many different digit phone numbers are possible if the first number cannot be a or ?      How many different license plates of the form LETTER LETTER LETTER DIGIT DIGIT DIGIT are there?      I have different pictures to hang on the wall. In how many different ways can I arrange them in a row?      In a class of students, how many ways are there to elect a president, vice president, and treasurer? (Assume no student can hold more than one office.)    "
},
{
  "id": "def-permutation",
  "level": "2",
  "url": "shorttitlelowercase-4.html#def-permutation",
  "type": "Definition",
  "number": "3.1",
  "title": "Permutation (B:1.2.1).",
  "body": " Permutation (B:1.2.1)   A permutation is an arrangement of objects in a row where order matters.   "
},
{
  "id": "shorttitlelowercase-4-4-1",
  "level": "2",
  "url": "shorttitlelowercase-4.html#shorttitlelowercase-4-4-1",
  "type": "Worksheet Exercise",
  "number": "3.4",
  "title": "",
  "body": "  The total number of permutations on different objects is:   "
},
{
  "id": "shorttitlelowercase-4-4-2",
  "level": "2",
  "url": "shorttitlelowercase-4.html#shorttitlelowercase-4-4-2",
  "type": "Worksheet Exercise",
  "number": "3.5",
  "title": "",
  "body": "  If we had different things and wanted to arrange just of them in a row, we'd have this many ways:   We denote the number of such arrangements by   "
},
{
  "id": "perm-on-n-objects",
  "level": "2",
  "url": "shorttitlelowercase-4.html#perm-on-n-objects",
  "type": "Definition",
  "number": "3.2",
  "title": "(B:1.2-2).",
  "body": " (B:1.2-2)   Each of the arrangements is called a permutation on objects taken at a time.    "
},
{
  "id": "shorttitlelowercase-4-4-4",
  "level": "2",
  "url": "shorttitlelowercase-4.html#shorttitlelowercase-4-4-4",
  "type": "Worksheet Exercise",
  "number": "3.6",
  "title": "",
  "body": "  There are people in a race. How many finishing orders are there?    "
},
{
  "id": "shorttitlelowercase-4-4-5",
  "level": "2",
  "url": "shorttitlelowercase-4.html#shorttitlelowercase-4-4-5",
  "type": "Worksheet Exercise",
  "number": "3.7",
  "title": "",
  "body": "  There are people in a race. How many ways to award first, second, and third place?   "
},
{
  "id": "ordered-sample",
  "level": "2",
  "url": "shorttitlelowercase-4.html#ordered-sample",
  "type": "Definition",
  "number": "3.3",
  "title": "(B:1.2-3).",
  "body": " (B:1.2-3)   If objects are selected from a set of objects, and if the order of the selection is noted, then the selected set of objects is called       "
},
{
  "id": "sampling-with-without-replacement",
  "level": "2",
  "url": "shorttitlelowercase-4.html#sampling-with-without-replacement",
  "type": "Definition",
  "number": "3.4",
  "title": "(B:1.2-4\/5).",
  "body": " (B:1.2-4\/5)    Sampling with replacement occurs when an object is selected and then replaced before the next object is selected. Sampling without replacement occurs when an object is not replaced after it has been selected.   "
},
{
  "id": "shorttitlelowercase-4-5-3",
  "level": "2",
  "url": "shorttitlelowercase-4.html#shorttitlelowercase-4-5-3",
  "type": "Worksheet Exercise",
  "number": "3.8",
  "title": "",
  "body": "  A state lottery selects balls numbered one at a time. After each ball is selected, it is put back. How many possible outcomes are there? (Assume order matters)   "
},
{
  "id": "shorttitlelowercase-4-5-4",
  "level": "2",
  "url": "shorttitlelowercase-4.html#shorttitlelowercase-4-5-4",
  "type": "Worksheet Exercise",
  "number": "3.9",
  "title": "",
  "body": "  Suppose in the above lottery the balls are not put back after being selected. How many possible outcomes are there? (Assume order matters)   "
},
{
  "id": "shorttitlelowercase-4-5-9",
  "level": "2",
  "url": "shorttitlelowercase-4.html#shorttitlelowercase-4-5-9",
  "type": "Worksheet Exercise",
  "number": "3.10",
  "title": "",
  "body": "  How many ways are there to select three people from the set    "
},
{
  "id": "shorttitlelowercase-4-6-1",
  "level": "2",
  "url": "shorttitlelowercase-4.html#shorttitlelowercase-4-6-1",
  "type": "Worksheet Exercise",
  "number": "3.11",
  "title": "",
  "body": "  Denote by the number of unordered sets of size .  Then the number of ordered sets is   "
},
{
  "id": "unordered-subset",
  "level": "2",
  "url": "shorttitlelowercase-4.html#unordered-subset",
  "type": "Definition",
  "number": "3.5",
  "title": "(B:1.2-6).",
  "body": " (B:1.2-6)   Each of the unordered subsets is called a      "
},
{
  "id": "shorttitlelowercase-4-6-4",
  "level": "2",
  "url": "shorttitlelowercase-4.html#shorttitlelowercase-4-6-4",
  "type": "Worksheet Exercise",
  "number": "3.12",
  "title": "",
  "body": "  A committee of is to be chosen from a group of people - how many ways?   "
},
{
  "id": "shorttitlelowercase-4-6-5",
  "level": "2",
  "url": "shorttitlelowercase-4.html#shorttitlelowercase-4-6-5",
  "type": "Worksheet Exercise",
  "number": "3.13",
  "title": "",
  "body": "  How many different ways are there to deal a card hand from a standard card deck?   "
},
{
  "id": "shorttitlelowercase-4-7-2",
  "level": "2",
  "url": "shorttitlelowercase-4.html#shorttitlelowercase-4-7-2",
  "type": "Worksheet Exercise",
  "number": "3.14",
  "title": "",
  "body": "  A committee of is to be chosen from . What is the probability that will be chosen?   "
},
{
  "id": "shorttitlelowercase-4-7-3",
  "level": "2",
  "url": "shorttitlelowercase-4.html#shorttitlelowercase-4-7-3",
  "type": "Worksheet Exercise",
  "number": "3.15",
  "title": "",
  "body": "  What is the probability that a random -card hand (from a standard card deck) consists of all diamonds?   "
},
{
  "id": "Practice-counting-methods",
  "level": "1",
  "url": "Practice-counting-methods.html",
  "type": "Worksheet",
  "number": "4",
  "title": "Methods of Enumeration Practice and Summary (1.2)",
  "body": " Methods of Enumeration Practice and Summary (1.2)    Use the counting principles from this section to determine the number of ways an event can occur. For each problem consider whether order matters, whether repetition is allowed, and if you are sampling with or without replacement.     A 4-digit security code is created using the digits 0 through 9. Digits may be repeated, and the code cannot start with 0.  How many different codes are possible?        A committee of 3 students is chosen from a class of 12 students. How many different committees are possible if the order of the committee members does not matter?        In how many ways can I choose 4 sweaters from my collection of 8 to give to 4 of my friends?      In how many ways can I choose 4 sweaters from my collection of 8 to give to give to my friend Susan?      A restaurant offers 8 different toppings for pizza. How many different 3-topping pizzas are possible? (No duplicate toppings.)         A restaurant offers 8 different toppings for pizza. How many different pizzas are possible using 0 to 8 of the toppings? (No duplicate toppings.)       Show that       How many different ways are there to arrange the letters in the word MATH?      How many different ways are there to arrange the letters in the word WESTERN? Note that are two E's - if you switched the places of the two E's you couldn't tell the permutations apart. The permutations you can tell apart are called distinguishable permutations . Count the number of distinguishable permutations.      How many different (distinguishable) ways are there to arrange the letters in the word SUCCESS?      Suppose I have 10 candy bars - 6 are Twix and 4 are Snickers. How many different ways can I arrange these candy bars in a line?        Suppose you have objects where are of one type, are of another type,..., are of the -th type, where How many distinguishable permutations of the objects are there? Give a formula.    The above formula is called the multinomial coefficient and is denoted by     There are 3 people in the Smith family, 5 people in the Jones family, and 2 people in the McCall family.     How many ways are there to line up all the people to take a picture?      How many ways are there to line up all the people if the members of each family must stay together?       I have tubs of chocolate, vanilla, strawberry, and mint ice cream. How many ways can I make a bowl with 6 scoops of ice cream? (order doesn't matter)        A 5-card hand is to be dealt from a standard 52-card deck. Find the probability of getting each of the following hands. Note that by rank or face value, we mean the value showing on the card (A,2,3,4,5,6,7,8,9,10,J,Q,K)     One pair (one pair of cards with the same face value plus three cards of different face values).      Two pairs (two different pairs of cards with the same face values plus one card of a different face value).          Binomial Coefficients           Multinomial Coefficients   We saw in the in class examples that we if we have objects, of which are similar, are similar, are similar, .., similar where then the number of distinguishable permutations of the objects are    This is called a multinomial coefficient because it arises as the coefficient of in the expansion of    "
},
{
  "id": "counting-1",
  "level": "2",
  "url": "Practice-counting-methods.html#counting-1",
  "type": "Worksheet Exercise",
  "number": "4.1",
  "title": "",
  "body": "  A 4-digit security code is created using the digits 0 through 9. Digits may be repeated, and the code cannot start with 0.  How many different codes are possible?     "
},
{
  "id": "counting-2",
  "level": "2",
  "url": "Practice-counting-methods.html#counting-2",
  "type": "Worksheet Exercise",
  "number": "4.2",
  "title": "",
  "body": "  A committee of 3 students is chosen from a class of 12 students. How many different committees are possible if the order of the committee members does not matter?     "
},
{
  "id": "counting-3",
  "level": "2",
  "url": "Practice-counting-methods.html#counting-3",
  "type": "Worksheet Exercise",
  "number": "4.3",
  "title": "",
  "body": "  In how many ways can I choose 4 sweaters from my collection of 8 to give to 4 of my friends?   "
},
{
  "id": "counting-4",
  "level": "2",
  "url": "Practice-counting-methods.html#counting-4",
  "type": "Worksheet Exercise",
  "number": "4.4",
  "title": "",
  "body": "  In how many ways can I choose 4 sweaters from my collection of 8 to give to give to my friend Susan?   "
},
{
  "id": "counting-5",
  "level": "2",
  "url": "Practice-counting-methods.html#counting-5",
  "type": "Worksheet Exercise",
  "number": "4.5",
  "title": "",
  "body": "  A restaurant offers 8 different toppings for pizza. How many different 3-topping pizzas are possible? (No duplicate toppings.)    "
},
{
  "id": "counting-6",
  "level": "2",
  "url": "Practice-counting-methods.html#counting-6",
  "type": "Worksheet Exercise",
  "number": "4.6",
  "title": "",
  "body": "  A restaurant offers 8 different toppings for pizza. How many different pizzas are possible using 0 to 8 of the toppings? (No duplicate toppings.)    "
},
{
  "id": "counting-7",
  "level": "2",
  "url": "Practice-counting-methods.html#counting-7",
  "type": "Worksheet Exercise",
  "number": "4.7",
  "title": "",
  "body": "  Show that    "
},
{
  "id": "counting-9",
  "level": "2",
  "url": "Practice-counting-methods.html#counting-9",
  "type": "Worksheet Exercise",
  "number": "4.8",
  "title": "",
  "body": "  How many different ways are there to arrange the letters in the word MATH?   "
},
{
  "id": "counting-10",
  "level": "2",
  "url": "Practice-counting-methods.html#counting-10",
  "type": "Worksheet Exercise",
  "number": "4.9",
  "title": "",
  "body": "  How many different ways are there to arrange the letters in the word WESTERN? Note that are two E's - if you switched the places of the two E's you couldn't tell the permutations apart. The permutations you can tell apart are called distinguishable permutations . Count the number of distinguishable permutations.   "
},
{
  "id": "counting-11",
  "level": "2",
  "url": "Practice-counting-methods.html#counting-11",
  "type": "Worksheet Exercise",
  "number": "4.10",
  "title": "",
  "body": "  How many different (distinguishable) ways are there to arrange the letters in the word SUCCESS?   "
},
{
  "id": "counting-12",
  "level": "2",
  "url": "Practice-counting-methods.html#counting-12",
  "type": "Worksheet Exercise",
  "number": "4.11",
  "title": "",
  "body": "  Suppose I have 10 candy bars - 6 are Twix and 4 are Snickers. How many different ways can I arrange these candy bars in a line?   "
},
{
  "id": "counting-13",
  "level": "2",
  "url": "Practice-counting-methods.html#counting-13",
  "type": "Worksheet Exercise",
  "number": "4.12",
  "title": "",
  "body": "  Suppose you have objects where are of one type, are of another type,..., are of the -th type, where How many distinguishable permutations of the objects are there? Give a formula.   "
},
{
  "id": "counting-14",
  "level": "2",
  "url": "Practice-counting-methods.html#counting-14",
  "type": "Worksheet Exercise",
  "number": "4.13",
  "title": "",
  "body": "  There are 3 people in the Smith family, 5 people in the Jones family, and 2 people in the McCall family.     How many ways are there to line up all the people to take a picture?      How many ways are there to line up all the people if the members of each family must stay together?    "
},
{
  "id": "counting-15",
  "level": "2",
  "url": "Practice-counting-methods.html#counting-15",
  "type": "Worksheet Exercise",
  "number": "4.14",
  "title": "",
  "body": "  I have tubs of chocolate, vanilla, strawberry, and mint ice cream. How many ways can I make a bowl with 6 scoops of ice cream? (order doesn't matter)   "
},
{
  "id": "counting-16",
  "level": "2",
  "url": "Practice-counting-methods.html#counting-16",
  "type": "Worksheet Exercise",
  "number": "4.15",
  "title": "",
  "body": "  A 5-card hand is to be dealt from a standard 52-card deck. Find the probability of getting each of the following hands. Note that by rank or face value, we mean the value showing on the card (A,2,3,4,5,6,7,8,9,10,J,Q,K)     One pair (one pair of cards with the same face value plus three cards of different face values).      Two pairs (two different pairs of cards with the same face values plus one card of a different face value).    "
},
{
  "id": "Practice-counting-methods-6-1",
  "level": "2",
  "url": "Practice-counting-methods.html#Practice-counting-methods-6-1",
  "type": "Worksheet Exercise",
  "number": "4.16",
  "title": "",
  "body": "   Binomial Coefficients       "
},
{
  "id": "Practice-counting-methods-6-2",
  "level": "2",
  "url": "Practice-counting-methods.html#Practice-counting-methods-6-2",
  "type": "Worksheet Exercise",
  "number": "4.17",
  "title": "",
  "body": "   Multinomial Coefficients   We saw in the in class examples that we if we have objects, of which are similar, are similar, are similar, .., similar where then the number of distinguishable permutations of the objects are   "
},
{
  "id": "conditional-probability",
  "level": "1",
  "url": "conditional-probability.html",
  "type": "Worksheet",
  "number": "5",
  "title": "Conditional Probability (1.3)",
  "body": " Conditional Probability (1.3)     What is the probability that in three tosses of a coin, exactly are heads?      Suppose that you know that at least one of the three tosses was a head. Now what is the probability that exactly were heads?        Conditional Probability(B:1.3-1)   The conditional probability of an event , given that event has occurred, is defined by     Note: If , then             If are disjoint, then .   In other words, satisfies all of the rules of a probability function.    Suppose , , and .     Do you expect to be less than, greater than, or equal to ?      Find             Consider the current US House of Representatives ( congress). As of now there are Republicans and Democrats, Independent, and vacancies. Suppose on a particular bill, the votes were as follows:         Democrat  Republican  Independent    Yes  173  22  0    No  41  196  1       What is the probability that a Representative voted YES given that they were a Democrat?      What is the probability that a Representative was a Republican given that they voted YES?       Sometimes its actually easier to compute and use it to find other unknowns:      The previous calculation shows:    Multiplicaion Rule (B:1.3-2)   The probability that two events, and , both occur is given by the multiplication rule:       An urn contains red and blue balls. You draw two at random.     What is the probability that the first ball is red and the second is blue?      What is the probability that both balls are red?         A grade school boy has five blue and four white marbles in his left pocket and four blue and five white marbles in his right pocket. If he transfers one marble at random from his left to his right pocket, what is the probability of his then drawing a blue marble from his right pocket?  Let BL = blue from left, BR = blue from right, WL = white from left        Suppose .     Fill in the Venn Diagram with the correct probabilities in each region.         Find       Find        Two cards are dealt at random and without replacement from a standard 52 card deck.     What is the probability the second card is an Ace given the first card is an Ace?      What is the probability the first card is an Ace and the second is a four?      What is the probability the first card is an Ace and the second is a Heart? (Think about what the possible outcomes look like - this is similar to the marble in the pockets example)         Certain medical conditions are hard to diagnose with certainty but there are tests that can predict whether or not someone has or is likely to get the condition. Insurance companies and doctors debate the value and suggested frequency of these screening tests. The following table shows the results from 1000 people who had a diagnostic test for a disease and whether or not the person actually had the disease. A negative test result means the test indicates the person likely does NOT have the disease.        Each cell depicts  Did the person actually have the disease?    of people  YES  NO  TOTALS    Positive test result  7  69  76    Negative test result  1  923  924    Totals  8  992  1000       What is the probability that the person has the disease?      What is the probability the person had a positive test result?      What is the probability the test will come back positive given a person does not have the disease? (This is a false positive.)      What is the probability the test will come back positive given a person has the disease? (This is known as the sensitivity of the test.)      What is the probability the test will come back negative given a person does not have the disease? (This is known as the specificity of the test.)      What is the probability a person has the disease given the test came back positive?         What is the probability that two randomly selected people have the same birthday? Ignore leap years.      What is the probability that in a room of people, two share the same birthday? Ignore leap years. Hint: Think of the complementary event.      How many people must be in a room before the probability that two share a birthday (ignoring leap years) is greater than 50%?     "
},
{
  "id": "conditional-probability-2-1",
  "level": "2",
  "url": "conditional-probability.html#conditional-probability-2-1",
  "type": "Worksheet Exercise",
  "number": "5.1",
  "title": "",
  "body": "  What is the probability that in three tosses of a coin, exactly are heads?   "
},
{
  "id": "conditional-probability-2-2",
  "level": "2",
  "url": "conditional-probability.html#conditional-probability-2-2",
  "type": "Worksheet Exercise",
  "number": "5.2",
  "title": "",
  "body": "  Suppose that you know that at least one of the three tosses was a head. Now what is the probability that exactly were heads?   "
},
{
  "id": "conditional-probability-3-1",
  "level": "2",
  "url": "conditional-probability.html#conditional-probability-3-1",
  "type": "Worksheet Exercise",
  "number": "5.3",
  "title": "",
  "body": "  Conditional Probability(B:1.3-1)   The conditional probability of an event , given that event has occurred, is defined by    "
},
{
  "id": "conditional-probability-3-3",
  "level": "2",
  "url": "conditional-probability.html#conditional-probability-3-3",
  "type": "Worksheet Exercise",
  "number": "5.4",
  "title": "",
  "body": "  Suppose , , and .     Do you expect to be less than, greater than, or equal to ?      Find        "
},
{
  "id": "conditional-probability-4-1",
  "level": "2",
  "url": "conditional-probability.html#conditional-probability-4-1",
  "type": "Worksheet Exercise",
  "number": "5.5",
  "title": "",
  "body": "  Consider the current US House of Representatives ( congress). As of now there are Republicans and Democrats, Independent, and vacancies. Suppose on a particular bill, the votes were as follows:         Democrat  Republican  Independent    Yes  173  22  0    No  41  196  1       What is the probability that a Representative voted YES given that they were a Democrat?      What is the probability that a Representative was a Republican given that they voted YES?    "
},
{
  "id": "conditional-probability-4-2",
  "level": "2",
  "url": "conditional-probability.html#conditional-probability-4-2",
  "type": "Worksheet Exercise",
  "number": "5.6",
  "title": "",
  "body": "  Sometimes its actually easier to compute and use it to find other unknowns:   "
},
{
  "id": "conditional-probability-5-2",
  "level": "2",
  "url": "conditional-probability.html#conditional-probability-5-2",
  "type": "Worksheet Exercise",
  "number": "5.7",
  "title": "",
  "body": "  Multiplicaion Rule (B:1.3-2)   The probability that two events, and , both occur is given by the multiplication rule:    "
},
{
  "id": "conditional-probability-5-3",
  "level": "2",
  "url": "conditional-probability.html#conditional-probability-5-3",
  "type": "Worksheet Exercise",
  "number": "5.8",
  "title": "",
  "body": "  An urn contains red and blue balls. You draw two at random.     What is the probability that the first ball is red and the second is blue?      What is the probability that both balls are red?    "
},
{
  "id": "conditional-probability-6-1",
  "level": "2",
  "url": "conditional-probability.html#conditional-probability-6-1",
  "type": "Worksheet Exercise",
  "number": "5.9",
  "title": "",
  "body": "  A grade school boy has five blue and four white marbles in his left pocket and four blue and five white marbles in his right pocket. If he transfers one marble at random from his left to his right pocket, what is the probability of his then drawing a blue marble from his right pocket?  Let BL = blue from left, BR = blue from right, WL = white from left   "
},
{
  "id": "conditional-probability-7-1",
  "level": "2",
  "url": "conditional-probability.html#conditional-probability-7-1",
  "type": "Worksheet Exercise",
  "number": "5.10",
  "title": "",
  "body": "  Suppose .     Fill in the Venn Diagram with the correct probabilities in each region.         Find       Find     "
},
{
  "id": "conditional-probability-7-2",
  "level": "2",
  "url": "conditional-probability.html#conditional-probability-7-2",
  "type": "Worksheet Exercise",
  "number": "5.11",
  "title": "",
  "body": "  Two cards are dealt at random and without replacement from a standard 52 card deck.     What is the probability the second card is an Ace given the first card is an Ace?      What is the probability the first card is an Ace and the second is a four?      What is the probability the first card is an Ace and the second is a Heart? (Think about what the possible outcomes look like - this is similar to the marble in the pockets example)    "
},
{
  "id": "conditional-probability-8-1",
  "level": "2",
  "url": "conditional-probability.html#conditional-probability-8-1",
  "type": "Worksheet Exercise",
  "number": "5.12",
  "title": "",
  "body": "  Certain medical conditions are hard to diagnose with certainty but there are tests that can predict whether or not someone has or is likely to get the condition. Insurance companies and doctors debate the value and suggested frequency of these screening tests. The following table shows the results from 1000 people who had a diagnostic test for a disease and whether or not the person actually had the disease. A negative test result means the test indicates the person likely does NOT have the disease.        Each cell depicts  Did the person actually have the disease?    of people  YES  NO  TOTALS    Positive test result  7  69  76    Negative test result  1  923  924    Totals  8  992  1000       What is the probability that the person has the disease?      What is the probability the person had a positive test result?      What is the probability the test will come back positive given a person does not have the disease? (This is a false positive.)      What is the probability the test will come back positive given a person has the disease? (This is known as the sensitivity of the test.)      What is the probability the test will come back negative given a person does not have the disease? (This is known as the specificity of the test.)      What is the probability a person has the disease given the test came back positive?    "
},
{
  "id": "conditional-probability-9-1",
  "level": "2",
  "url": "conditional-probability.html#conditional-probability-9-1",
  "type": "Worksheet Exercise",
  "number": "5.13",
  "title": "",
  "body": "  What is the probability that two randomly selected people have the same birthday? Ignore leap years.   "
},
{
  "id": "conditional-probability-9-2",
  "level": "2",
  "url": "conditional-probability.html#conditional-probability-9-2",
  "type": "Worksheet Exercise",
  "number": "5.14",
  "title": "",
  "body": "  What is the probability that in a room of people, two share the same birthday? Ignore leap years. Hint: Think of the complementary event.   "
},
{
  "id": "conditional-probability-9-3",
  "level": "2",
  "url": "conditional-probability.html#conditional-probability-9-3",
  "type": "Worksheet Exercise",
  "number": "5.15",
  "title": "",
  "body": "  How many people must be in a room before the probability that two share a birthday (ignoring leap years) is greater than 50%?   "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
