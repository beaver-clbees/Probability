var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "shorttitlelowercase-2",
  "level": "1",
  "url": "shorttitlelowercase-2.html",
  "type": "Worksheet",
  "number": "1",
  "title": "Basic Definitions",
  "body": " Basic Definitions   Random Experiment   An experiment where the outcome cannot be predicted with certainty. xyz     Sample Space   The set of all possible outcomes of a random experiment is called a sample space, S (also called outcome space, or just space).      Flip a coin and record the face that is showing:      Roll two dice and add the faces showing:       Flip two coins. Record the faces:      Flip two coins. Determine if they are the same:      Flip a coin until a heads appears. Record the number of flips needed:      Flip a coin until you get two heads in a row. Record how long (time) it takes:     Event   An event is a collection of outcomes in a sample space.    Notice that a sample space S is a set, and an event is a subset of S. We will review some basics of sets and see how they can be represented with Venn Diagrams. Our universal set is always our sample space in this context because the sample space contains all possible outcomes. We will assume all sets and elements are in S.   Empty or Null Set    denotes the empty or null set (the set containing no elements).       B indicates A is a subset of B. Draw and shade set A so it is a subset of B.          is the union of sets A and B. Elements in the union might be in A or in B or in both A and B. Shade           is the intersection of A and B. Elements in the intersection are in A and also in B. Shade .         A' is the complement of A (all elements in S that are NOT in A). Shade A'.          and are mutually exclusive or disjoint if . Make a sketch.         A and B are exhaustive if Make a sketch.       These definitions extend to larger numbers of subsets. For example, given     are mutually exclusive events if for (they are pairwise disjoint).     are exhaustive events if      We are interested in computing the probability of an event A in our sample space. We can approximate the probability by repeating the experiment n times. Let N(A) be the number of times an outcome of the experiment is in the event (subset) A. Then we can approximate the probability of A as        which is called the relative frequency of the event A in these n repetitions of the experiment.  Note that if n is small and a few of us do this experiment we may get wildly different answers. However as n gets larger and larger, this fraction will tend to stabilize and we call it the probability of event A . You can think of it as    (Probability of A)       Suppose we have a fair, six sided die and we want to know the probability of the event, E that it will show an even number. Find the sample space S and E. What do you expect for P(E)?    Now we give the formal definition of a probability function.   Probability   Probability is a real-valued set function, P, that assigns to each event A in the sample space S, a number P(A), called the probability of the event A such that the following properties are satisfied:             If are events and (mutually disjoint) then for each positive integer k and for any countable (possibly infinite) number of events.         Sometimes you can use mathematics to determine what the probability function should be under given conditions. For example in the 6-sided die example, if the die is fair, then Let Let G be the set of odd outcomes.  Find      Equally Likely Outcomes   Suppose we have a random experiment with m outcomes and sample space . If each of the outcomes in S has the same probability of occurring (e.g. roll a fair die), then we say that each of the m outcomes are equally likely. In that case,         This makes it easy to determine the probability of an event: If is an event, with h outcomes, then    Standard deck of cards      Draw one card at random from a standard 52 card deck. The sample space is the collection of 52 cards. Assume that each card is equally likely to be chosen (i.e., that a card is drawn `at random'). Thus the probability function assigns a probability of to each of the outcomes. Let >                     Determine the following probabilities.                               Suppose a dart is thrown at the picture below. Assume it lands in the sample space, S. Let A be the event the dart lands in rectangle A and let B be the event the dart lands in rectangle B. Estimate the following probabilities and be prepared to justify your estimates.                                          Shade the regions indicated.         Express the shaded regions using set notation.     "
},
{
  "id": "def-ranexp",
  "level": "2",
  "url": "shorttitlelowercase-2.html#def-ranexp",
  "type": "Definition",
  "number": "1.1",
  "title": "Random Experiment.",
  "body": " Random Experiment   An experiment where the outcome cannot be predicted with certainty. xyz   "
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
  "id": "shorttitlelowercase-2-4",
  "level": "2",
  "url": "shorttitlelowercase-2.html#shorttitlelowercase-2-4",
  "type": "Worksheet Exercise",
  "number": "1.1",
  "title": "",
  "body": "  Flip a coin and record the face that is showing:   "
},
{
  "id": "shorttitlelowercase-2-5",
  "level": "2",
  "url": "shorttitlelowercase-2.html#shorttitlelowercase-2-5",
  "type": "Worksheet Exercise",
  "number": "1.2",
  "title": "",
  "body": "  Roll two dice and add the faces showing:    "
},
{
  "id": "shorttitlelowercase-2-6",
  "level": "2",
  "url": "shorttitlelowercase-2.html#shorttitlelowercase-2-6",
  "type": "Worksheet Exercise",
  "number": "1.3",
  "title": "",
  "body": "  Flip two coins. Record the faces:   "
},
{
  "id": "shorttitlelowercase-2-7",
  "level": "2",
  "url": "shorttitlelowercase-2.html#shorttitlelowercase-2-7",
  "type": "Worksheet Exercise",
  "number": "1.4",
  "title": "",
  "body": "  Flip two coins. Determine if they are the same:   "
},
{
  "id": "shorttitlelowercase-2-8",
  "level": "2",
  "url": "shorttitlelowercase-2.html#shorttitlelowercase-2-8",
  "type": "Worksheet Exercise",
  "number": "1.5",
  "title": "",
  "body": "  Flip a coin until a heads appears. Record the number of flips needed:   "
},
{
  "id": "shorttitlelowercase-2-9",
  "level": "2",
  "url": "shorttitlelowercase-2.html#shorttitlelowercase-2-9",
  "type": "Worksheet Exercise",
  "number": "1.6",
  "title": "",
  "body": "  Flip a coin until you get two heads in a row. Record how long (time) it takes:   "
},
{
  "id": "shorttitlelowercase-2-10",
  "level": "2",
  "url": "shorttitlelowercase-2.html#shorttitlelowercase-2-10",
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
  "id": "shorttitlelowercase-2-13",
  "level": "2",
  "url": "shorttitlelowercase-2.html#shorttitlelowercase-2-13",
  "type": "Worksheet Exercise",
  "number": "1.7",
  "title": "",
  "body": "   B indicates A is a subset of B. Draw and shade set A so it is a subset of B.      "
},
{
  "id": "shorttitlelowercase-2-14",
  "level": "2",
  "url": "shorttitlelowercase-2.html#shorttitlelowercase-2-14",
  "type": "Worksheet Exercise",
  "number": "1.8",
  "title": "",
  "body": "   is the union of sets A and B. Elements in the union might be in A or in B or in both A and B. Shade       "
},
{
  "id": "shorttitlelowercase-2-15",
  "level": "2",
  "url": "shorttitlelowercase-2.html#shorttitlelowercase-2-15",
  "type": "Worksheet Exercise",
  "number": "1.9",
  "title": "",
  "body": "   is the intersection of A and B. Elements in the intersection are in A and also in B. Shade .      "
},
{
  "id": "shorttitlelowercase-2-16",
  "level": "2",
  "url": "shorttitlelowercase-2.html#shorttitlelowercase-2-16",
  "type": "Worksheet Exercise",
  "number": "1.10",
  "title": "",
  "body": "  A' is the complement of A (all elements in S that are NOT in A). Shade A'.      "
},
{
  "id": "shorttitlelowercase-2-17",
  "level": "2",
  "url": "shorttitlelowercase-2.html#shorttitlelowercase-2-17",
  "type": "Worksheet Exercise",
  "number": "1.11",
  "title": "",
  "body": "   and are mutually exclusive or disjoint if . Make a sketch.      "
},
{
  "id": "shorttitlelowercase-2-18",
  "level": "2",
  "url": "shorttitlelowercase-2.html#shorttitlelowercase-2-18",
  "type": "Worksheet Exercise",
  "number": "1.12",
  "title": "",
  "body": "  A and B are exhaustive if Make a sketch.      "
},
{
  "id": "shorttitlelowercase-2-21",
  "level": "2",
  "url": "shorttitlelowercase-2.html#shorttitlelowercase-2-21",
  "type": "Worksheet Exercise",
  "number": "1.13",
  "title": "",
  "body": "     "
},
{
  "id": "shorttitlelowercase-2-24",
  "level": "2",
  "url": "shorttitlelowercase-2.html#shorttitlelowercase-2-24",
  "type": "Worksheet Exercise",
  "number": "1.14",
  "title": "",
  "body": "  (Probability of A)    "
},
{
  "id": "shorttitlelowercase-2-25",
  "level": "2",
  "url": "shorttitlelowercase-2.html#shorttitlelowercase-2-25",
  "type": "Worksheet Exercise",
  "number": "1.15",
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
  "body": " Probability   Probability is a real-valued set function, P, that assigns to each event A in the sample space S, a number P(A), called the probability of the event A such that the following properties are satisfied:             If are events and (mutually disjoint) then for each positive integer k and for any countable (possibly infinite) number of events.      "
},
{
  "id": "shorttitlelowercase-2-28",
  "level": "2",
  "url": "shorttitlelowercase-2.html#shorttitlelowercase-2-28",
  "type": "Worksheet Exercise",
  "number": "1.16",
  "title": "",
  "body": "  Sometimes you can use mathematics to determine what the probability function should be under given conditions. For example in the 6-sided die example, if the die is fair, then Let Let G be the set of odd outcomes.  Find    "
},
{
  "id": "shorttitlelowercase-2-31",
  "level": "2",
  "url": "shorttitlelowercase-2.html#shorttitlelowercase-2-31",
  "type": "Worksheet Exercise",
  "number": "1.17",
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
  "body": " Standard deck of cards  "
},
{
  "id": "shorttitlelowercase-2-35",
  "level": "2",
  "url": "shorttitlelowercase-2.html#shorttitlelowercase-2-35",
  "type": "Worksheet Exercise",
  "number": "1.18",
  "title": "",
  "body": "  Draw one card at random from a standard 52 card deck. The sample space is the collection of 52 cards. Assume that each card is equally likely to be chosen (i.e., that a card is drawn `at random'). Thus the probability function assigns a probability of to each of the outcomes. Let >                     Determine the following probabilities.                            "
},
{
  "id": "shorttitlelowercase-2-36",
  "level": "2",
  "url": "shorttitlelowercase-2.html#shorttitlelowercase-2-36",
  "type": "Worksheet Exercise",
  "number": "1.19",
  "title": "",
  "body": "  Suppose a dart is thrown at the picture below. Assume it lands in the sample space, S. Let A be the event the dart lands in rectangle A and let B be the event the dart lands in rectangle B. Estimate the following probabilities and be prepared to justify your estimates.                                       "
},
{
  "id": "shorttitlelowercase-2-37",
  "level": "2",
  "url": "shorttitlelowercase-2.html#shorttitlelowercase-2-37",
  "type": "Worksheet Exercise",
  "number": "1.20",
  "title": "",
  "body": "  Shade the regions indicated.      "
},
{
  "id": "shorttitlelowercase-2-38",
  "level": "2",
  "url": "shorttitlelowercase-2.html#shorttitlelowercase-2-38",
  "type": "Worksheet Exercise",
  "number": "1.21",
  "title": "",
  "body": "  Express the shaded regions using set notation.    "
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
